import { useState } from 'react';
import TransactionChart from './TransactionChart';

const ChartToggle = () => {
  const [showChart, setShowChart] = useState(false);

  return (
    <div className="text-center my-6">
      <button
        onClick={() => setShowChart(!showChart)}
        className="px-5 py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded transition duration-200"
      >
        {showChart ? 'Hide Chart' : 'Show Chart'}
      </button>

      {showChart && (
        <div className="mt-6 bg-gray-800 p-4 rounded-xl border border-gray-700 shadow text-white">
          <TransactionChart />
        </div>
      )}
    </div>
  );
};

export default ChartToggle;
