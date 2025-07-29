const FilterByCategory = ({ categories, selectedCategory, onSelect }) => {
  return (
    <div className="bg-white shadow rounded p-4 mt-6 max-w-md mx-auto">
      <label className="block mb-2 font-medium text-gray-700">Filter by Category:</label>
      <select
        value={selectedCategory}
        onChange={(e) => onSelect(e.target.value)}
        className="w-full border px-3 py-2 rounded"
      >
        <option value="All">All</option>
        {categories.map((cat, index) => (
          <option key={index} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterByCategory;
