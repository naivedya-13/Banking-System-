import { useEffect, useState } from "react";
import {
  getAllCustomers,
  getAllAccounts,
  getBankerAccountTransactions,
} from "../services/api";

export default function BankerDashboard() {
  const [customers, setCustomers] = useState([]);
  const [accounts, setAccounts] = useState([]);
  const [selected, setSelected] = useState(null);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    getAllCustomers().then((res) => setCustomers(res.data));
    getAllAccounts().then((res) => setAccounts(res.data));
  }, []);

  const handleSelect = (acc) => {
    setSelected(acc);
    getBankerAccountTransactions(acc.id).then((res) =>
      setTransactions(res.data)
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Banker Dashboard</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-5 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">All Customers</h3>
          <ul className="divide-y divide-gray-200">
            {customers.map((c) => (
              <li key={c.id} className="py-3">
                <div className="text-gray-800 font-medium">{c.full_name}</div>
                <div className="text-sm text-gray-600">{c.username} | {c.email}</div>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white p-5 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">All Accounts</h3>
          <ul className="space-y-3">
            {accounts.map((acc) => (
              <li
                key={acc.id}
                onClick={() => handleSelect(acc)}
                className={`cursor-pointer border rounded-lg p-4 hover:bg-blue-50 transition ${
                  selected?.id === acc.id ? "bg-blue-100 border-blue-400" : "bg-white"
                }`}
              >
                <div className="font-mono text-sm text-gray-700">
                  Account #: {acc.account_number}
                </div>
                <div className="text-lg font-bold text-gray-800">₹{acc.balance}</div>
                <div className="text-sm text-gray-600">
                  {acc.full_name} ({acc.username})
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {selected && (
        <div className="bg-white p-5 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">
            Transactions for Account #{selected.account_number}
          </h3>
          <div className="max-h-72 overflow-y-auto divide-y divide-gray-200">
            {transactions.length === 0 ? (
              <p className="text-gray-500">No transactions yet.</p>
            ) : (
              transactions.map((tx) => (
                <div key={tx.id} className="py-3 text-sm text-gray-700">
                  <div className="flex justify-between">
                    <span className={`font-semibold capitalize ${tx.type === "deposit" ? "text-green-600" : "text-red-600"}`}>
                      {tx.type}
                    </span>
                    <span>₹{tx.amount}</span>
                  </div>
                  <div className="text-gray-600 text-xs mt-1">
                    {tx.description}
                    <br />
                    <span>Balance After: ₹{tx.balance_after}</span> |{" "}
                    {new Date(tx.created_at).toLocaleString()}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}
