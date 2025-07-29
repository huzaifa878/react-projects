import React from "react";

const TransactionControls = ({
  categories,
  selectedCategory,
  onSelectCategory,
  searchTerm,
  onSearch,
  sortOption,
  onSort,
}) => {
  return (
    <div className="max-w-md mx-auto my-4 space-y-4 text-white">
      {/* 🔍 Search Input */}
      <input
        type="text"
        placeholder="Search by description"
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
        className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded placeholder-gray-400"
      />

      {/* 🔽 Sort Dropdown */}
      <select
        value={sortOption}
        onChange={(e) => onSort(e.target.value)}
        className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded text-white"
      >
        <option value="newest">📅 Newest First</option>
        <option value="oldest">📅 Oldest First</option>
        <option value="high">💰 Amount: High to Low</option>
        <option value="low">💸 Amount: Low to High</option>
      </select>

      {/* 🔘 Category Filters */}
      <div className="flex flex-wrap justify-center gap-2">
        <button
          onClick={() => onSelectCategory("All")}
          className={`px-3 py-1 rounded transition ${
            selectedCategory === "All"
              ? "bg-emerald-600 text-white"
              : "bg-zinc-700 text-gray-300 hover:bg-zinc-600"
          }`}
        >
          All
        </button>

        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`px-3 py-1 rounded transition ${
              selectedCategory === category
                ? "bg-emerald-600 text-white"
                : "bg-zinc-700 text-gray-300 hover:bg-zinc-600"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TransactionControls;
