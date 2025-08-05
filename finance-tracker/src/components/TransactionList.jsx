import { useContext, useState } from "react";
import { TransactionContext } from "../context/TransactionContext";

const TransactionList = ({ transactions }) => {
  const { dispatch } = useContext(TransactionContext);

  const [editTransaction, setEditTransaction] = useState(null);
  const [formData, setFormData] = useState({
    description: "",
    amount: "",
    category: "",
  });

  const handleDelete = (id) => {
    dispatch({ type: "DELETE_TRANSACTION", payload: id });
  };

  const handleEditClick = (transaction) => {
    setEditTransaction(transaction);
    setFormData({
      description: transaction.description,
      amount: transaction.amount,
      category: transaction.category,
    });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    const updated = {
      ...editTransaction,
      ...formData,
      amount: parseFloat(formData.amount),
    };
    dispatch({ type: "EDIT_TRANSACTION", payload: updated });
    setEditTransaction(null);
  };

  return (
    <div className="bg-zinc-900 text-white mt-6 p-4 rounded shadow max-w-md mx-auto">
      <h3 className="text-lg font-bold mb-4 text-center">📄 Transaction History</h3>

      <ul className="space-y-2 max-h-60 overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-700">
        {transactions.length === 0 && (
          <li className="text-gray-400 text-center">No transactions yet</li>
        )}

        {transactions.map((item) => (
          <li
            key={item.id}
            className={`flex justify-between items-center p-2 border rounded ${
              item.amount >= 0 ? "border-green-500" : "border-red-500"
            }`}
          >
            <div>
              <p className="font-medium">{item.description}</p>
              <p className="text-sm text-gray-400">{item.date}</p>
              <p className="text-sm text-gray-500 italic">{item.category}</p>
              <p className={`text-sm ${item.amount >= 0 ? "text-green-400" : "text-red-400"}`}>
                Rs {item.amount}
              </p>
            </div>

            <div className="flex flex-col space-y-1">
              <button
                onClick={() => handleEditClick(item)}
                className="text-sm bg-amber-600 hover:bg-amber-700 text-white px-2 py-1 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(item.id)}
                className="text-sm bg-red-600 hover:bg-red-700 text-white px-2 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

      {editTransaction && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <form
            onSubmit={handleEditSubmit}
            className="bg-zinc-800 text-white p-6 rounded shadow-md w-80 space-y-4"
          >
            <h3 className="text-lg font-semibold text-center">Edit Transaction</h3>
            <input
              type="text"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-3 py-2 bg-zinc-700 border border-zinc-600 rounded placeholder-gray-300"
              placeholder="Description"
              required
            />
            <input
              type="number"
              value={formData.amount}
              onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
              className="w-full px-3 py-2 bg-zinc-700 border border-zinc-600 rounded placeholder-gray-300"
              placeholder="Amount"
              required
            />
            <input
              type="text"
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="w-full px-3 py-2 bg-zinc-700 border border-zinc-600 rounded placeholder-gray-300"
              placeholder="Category"
              required
            />
            <div className="flex justify-between">
              <button
                type="submit"
                className="bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-700"
              >
                Save
              </button>
              <button
                type="button"
                onClick={() => setEditTransaction(null)}
                className="bg-zinc-600 text-white px-4 py-2 rounded hover:bg-zinc-500"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default TransactionList;
