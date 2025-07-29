import { useState, useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";

const AddTransaction = () => {
  const { dispatch } = useContext(TransactionContext);

  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Other");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description || !amount) return;

    const newTransaction = {
      id: crypto.randomUUID(),
      description,
      amount: +amount,
      category,
      date,
    };

    dispatch({ type: "ADD_TRANSACTION", payload: newTransaction });

    setDescription("");
    setAmount("");
    setCategory("Other");
    setDate("");
  };

  return (
    <div className="bg-gray-800 text-white p-6 mt-8 rounded-xl shadow-lg max-w-lg mx-auto border border-gray-700">
      <h3 className="text-xl font-bold mb-6 text-center tracking-wide">➕ Add New Transaction</h3>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-300">Description</label>
          <input
            type="text"
            className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded text-white placeholder-gray-500"
            placeholder="e.g. Salary, Grocery"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-300">
            Amount{" "}
            <span className="text-xs text-gray-500">(positive = income, negative = expense)</span>
          </label>
          <input
            type="number"
            className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded text-white placeholder-gray-500"
            placeholder="e.g. 500 or -200"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-300">Category</label>
          <select
            className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded text-white"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Salary">Salary</option>
            <option value="Food">Food</option>
            <option value="Transport">Transport</option>
            <option value="Shopping">Shopping</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-300">Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded text-white"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded font-semibold transition duration-200"
        >
          Add Transaction
        </button>
      </form>
    </div>
  );
};

export default AddTransaction;
