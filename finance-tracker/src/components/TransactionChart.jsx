import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from 'recharts';
import { useContext } from 'react';
import { TransactionContext } from '../context/TransactionContext';

const COLORS = ['#4CAF50', '#F44336']; // Income (green), Expense (red)

const TransactionChart = () => {
  const { transactions } = useContext(TransactionContext);

  const income = transactions
    .filter(t => t.amount > 0)
    .reduce((sum, t) => sum + t.amount, 0);

  const expense = transactions
    .filter(t => t.amount < 0)
    .reduce((sum, t) => sum + Math.abs(t.amount), 0);

  const data = [
    { name: 'Income', value: income },
    { name: 'Expense', value: expense },
  ];

  return (
    <div className="max-w-md mx-auto my-6 p-4 bg-gray-800 text-white rounded shadow border border-gray-700">
      <h3 className="text-center text-lg font-bold mb-4">💹 Income vs Expense</h3>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius={80}
            fill="#8884d8"
            label
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TransactionChart;
