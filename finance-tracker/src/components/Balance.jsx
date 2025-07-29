import { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";

const Balance = () => {
  const { transactions } = useContext(TransactionContext);
  const total = transactions.reduce((acc, item) => acc + item.amount, 0);

  return (
    <div className="bg-gray-800 text-white shadow-lg rounded-xl p-6 mt-8 mx-auto max-w-lg text-center border border-gray-700">
      <h2 className="text-2xl font-semibold text-gray-100">Your Balance</h2>
      <p
        className={`text-4xl font-bold mt-3 ${
          total >= 0 ? "text-green-400" : "text-red-400"
        }`}
      >
        Rs {total}
      </p>
    </div>
  );
};

export default Balance;
