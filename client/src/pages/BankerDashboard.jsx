import { useEffect, useState } from "react";
import {
  getAllAccounts,
  getBankerAccountTransactions,
} from "../services/api";

export default function BankerDashboard() {
  const [accounts, setAccounts] = useState([]);
  const [selected, setSelected] = useState(null);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    getAllAccounts().then((res) => setAccounts(res.data));
  }, []);

  const handleSelect = (acc) => {
    setSelected(acc);
    getBankerAccountTransactions(acc.id).then((res) =>
      setTransactions(res.data)
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-8">
      <h2 className="text-4xl font-extrabold text-blue-700 mb-8 text-center drop-shadow">
        Banker Dashboard
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Account List */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
          <h3 className="text-2xl font-semibold text-gray-800 mb-5">
            All Accounts
          </h3>
          <ul className="space-y-4">
            {accounts.map((acc) => (
              <li
                key={acc.id}
                onClick={() => handleSelect(acc)}
                className={`cursor-pointer border rounded-xl p-4 hover:shadow-lg transition duration-200 ${
                  selected?.id === acc.id
                    ? "bg-blue-100 border-blue-400"
                    : "bg-gray-50 border-gray-300"
                }`}
              >
                <div className="text-gray-800 font-mono text-sm">
                  Account #: <span className="font-bold">{acc.account_number}</span>
                </div>
                <div className="text-xl font-bold text-blue-600 mt-1">₹{acc.balance}</div>
                <div className="text-sm text-gray-600 mt-1">
                  {acc.full_name} (<span className="italic">{acc.username}</span>)
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Transaction Section */}
        {selected && (
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
            <h3 className="text-2xl font-semibold text-gray-800 mb-5">
              Transactions for Account #{selected.account_number}
            </h3>
            <div className="max-h-80 overflow-y-auto divide-y divide-gray-100 scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-gray-200">
              {transactions.length === 0 ? (
                <p className="text-gray-500 italic text-center">No transactions yet.</p>
              ) : (
                transactions.map((tx) => (
                  <div key={tx.id} className="py-4 text-sm text-gray-700">
                    <div className="flex justify-between items-center mb-1">
                      <span
                        className={`font-semibold capitalize ${
                          tx.type === "deposit"
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        {tx.type}
                      </span>
                      <span className="font-bold">₹{tx.amount}</span>
                    </div>
                    <div className="text-xs text-gray-600 leading-snug">
                      {tx.description && <div>{tx.description}</div>}
                      <div>
                        Balance After: ₹{tx.balance_after} |{" "}
                        {new Date(tx.created_at).toLocaleString()}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
