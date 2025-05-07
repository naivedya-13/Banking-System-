import { useEffect, useState } from "react";
import {
  getAccounts,
  deposit,
  withdraw,
  getAccountTransactions,
} from "../services/api";

export default function CustomerDashboard() {
  const [accounts, setAccounts] = useState([]);
  const [selected, setSelected] = useState(null);
  const [amount, setAmount] = useState("");
  const [desc, setDesc] = useState("");
  const [action, setAction] = useState("deposit");
  const [transactions, setTransactions] = useState([]);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    getAccounts().then((res) => setAccounts(res.data));
  }, []);

  const handleSelect = (acc) => {
    setSelected(acc);
    setMsg("");
    getAccountTransactions(acc.id).then((res) => setTransactions(res.data));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selected) return;
    try {
      const fn = action === "deposit" ? deposit : withdraw;
      const res = await fn(selected.id, { amount, description: desc });
      setMsg(res.data.message);

      // Refresh accounts and transactions
      getAccounts().then((res) => setAccounts(res.data));
      getAccountTransactions(selected.id).then((res) => setTransactions(res.data));
    } catch (err) {
      setMsg(err.response?.data?.message || "Operation failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Customer Dashboard</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white p-5 rounded-lg shadow-md lg:col-span-1">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Your Accounts</h3>
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
              </li>
            ))}
          </ul>
        </div>

        {selected && (
          <div className="lg:col-span-2 bg-white p-5 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Manage Account #{selected.account_number}
            </h3>

            <form
              onSubmit={handleSubmit}
              className="flex flex-wrap gap-3 mb-4 items-end"
            >
              <select
                value={action}
                onChange={(e) => setAction(e.target.value)}
                className="border p-2 rounded-md text-sm text-gray-700"
              >
                <option value="deposit">Deposit</option>
                <option value="withdraw">Withdraw</option>
              </select>

              <input
                type="number"
                min="1"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Amount"
                className="border p-2 rounded-md flex-1 min-w-[100px]"
                required
              />
              <input
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                placeholder="Description"
                className="border p-2 rounded-md flex-1 min-w-[150px]"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
              >
                Submit
              </button>
            </form>

            {msg && (
              <div className="mb-4 text-sm text-green-600 font-medium">
                {msg}
              </div>
            )}

            <h4 className="font-semibold text-gray-700 mb-2">Recent Transactions</h4>
            <div className="max-h-64 overflow-y-auto bg-gray-50 p-3 rounded border">
              {transactions.length === 0 ? (
                <p className="text-gray-500 text-sm">No transactions yet.</p>
              ) : (
                <ul className="space-y-2">
                  {transactions.map((tx) => (
                    <li key={tx.id} className="text-sm border-b pb-2">
                      <div className="flex justify-between">
                        <span
                          className={`font-semibold capitalize ${
                            tx.type === "deposit" ? "text-green-600" : "text-red-600"
                          }`}
                        >
                          {tx.type}
                        </span>
                        <span>₹{tx.amount}</span>
                      </div>
                      <div className="text-gray-600 text-xs mt-1">
                        {tx.description}
                        <br />
                        <span>Balance: ₹{tx.balance_after}</span> |{" "}
                        {new Date(tx.created_at).toLocaleString()}
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
