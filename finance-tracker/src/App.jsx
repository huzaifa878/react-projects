import { useState, useContext } from 'react';
import Balance from './components/Balance.jsx';
import Header from './components/Header.jsx';
import AddTransaction from './components/AddTransaction.jsx';
import TransactionList from './components/TransactionList.jsx';
import IncomeExpenses from './components/IncomeExpenses.jsx';
import ExportCSV from './components/ExportCSV.jsx';
import { TransactionContext } from './context/TransactionContext';
import TransactionControls from './components/TransactionControls.jsx';
import ChartToggle from './components/ChartToggle.jsx';

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("newest");

  const { transactions } = useContext(TransactionContext);

  const categories = Array.from(new Set(transactions.map(t => t.category))).filter(Boolean);

  const filteredTransactions = transactions
    .filter(t => {
      const categoryMatch = selectedCategory === "All" || t.category === selectedCategory;
      const searchMatch = t.description.toLowerCase().includes(searchTerm.toLowerCase());
      return categoryMatch && searchMatch;
    })
    .sort((a, b) => {
      if (sortOption === "newest") return b.id.localeCompare(a.id);
      if (sortOption === "oldest") return a.id.localeCompare(b.id);
      if (sortOption === "high") return b.amount - a.amount;
      if (sortOption === "low") return a.amount - b.amount;
      return 0;
    });

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Header />

      <main className="max-w-6xl mx-auto px-4 py-6">
        <Balance />
        <IncomeExpenses />
        <ChartToggle />
        <AddTransaction />

        <TransactionControls
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          searchTerm={searchTerm}
          onSearch={setSearchTerm}
          sortOption={sortOption}
          onSort={setSortOption}
        />

        <p className="text-sm text-slate-300 mb-2 text-center">
          Showing {filteredTransactions.length} transaction{filteredTransactions.length !== 1 && 's'}
        </p>

        <ExportCSV data={filteredTransactions} />
        <TransactionList transactions={filteredTransactions} />
      </main>
    </div>
  );
}

export default App;
