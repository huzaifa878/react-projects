import { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";

const IncomeExpenses = () => {
  const { transactions } = useContext(TransactionContext);

  const income = transactions
    .filter((t) => t.amount > 0)
    .reduce((acc, t) => acc + t.amount, 0);

  const expense = transactions
    .filter((t) => t.amount < 0)
    .reduce((acc, t) => acc + t.amount, 0);

  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 mt-6 max-w-lg mx-auto">
      <div className="bg-gray-800 text-white shadow rounded-xl p-5 w-full text-center border-l-4 border-green-400">
        <h4 className="font-semibold text-gray-300">Income</h4>
        <p className="text-2xl font-bold text-green-400 mt-2">Rs {income}</p>
      </div>

      <div className="bg-gray-800 text-white shadow rounded-xl p-5 w-full text-center border-l-4 border-red-400">
        <h4 className="font-semibold text-gray-300">Expense</h4>
        <p className="text-2xl font-bold text-red-400 mt-2">Rs {Math.abs(expense)}</p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
