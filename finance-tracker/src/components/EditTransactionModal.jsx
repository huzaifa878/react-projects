import { useState, useEffect } from 'react';

const EditTransactionModal = ({ transaction, onSave, onClose }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
    if (transaction) {
      setDescription(transaction.description);
      setAmount(transaction.amount);
      setCategory(transaction.category || '');
    }
  }, [transaction]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(transaction.id, {
      description,
      amount: parseFloat(amount),
      category,
    });
  };

  if (!transaction) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-gray-900 text-white rounded-xl shadow-lg p-6 w-full max-w-md border border-gray-700">
        <h2 className="text-2xl font-semibold mb-4 text-center">Edit Transaction</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            className="w-full bg-gray-800 border border-gray-700 text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <input
            className="w-full bg-gray-800 border border-gray-700 text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
          <input
            className="w-full bg-gray-800 border border-gray-700 text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded font-semibold"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditTransactionModal;
