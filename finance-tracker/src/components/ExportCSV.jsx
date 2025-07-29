const ExportCSV = ({ data }) => {
  const handleExport = () => {
    if (!data || data.length === 0) return;

    const headers = Object.keys(data[0]).join(",");
    const rows = data.map((t) =>
      Object.values(t).map((value) => `"${value}"`).join(",")
    );

    const csv = [headers, ...rows].join("\n");

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.setAttribute("download", "transactions.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="text-center my-6">
      <button
        onClick={handleExport}
        className="px-5 py-2 bg-emerald-600 text-white rounded-lg shadow hover:bg-emerald-700 transition duration-200 font-medium"
      >
        ⬇️ Export CSV
      </button>
    </div>
  );
};

export default ExportCSV;
