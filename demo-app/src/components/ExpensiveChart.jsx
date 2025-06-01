// components/ExpensiveChart.jsx

const ExpensiveChart = () => {
  const data = Array.from({ length: 1000 }, (_, i) => i);

  const rendered = data.map((num) => {
    const expensiveCalc = Math.sqrt(num) ** 1.5;
    return <div key={num}>📊 {expensiveCalc.toFixed(2)}</div>;
  });

  return (
    <div className="p-4 border rounded shadow-md mt-4 bg-white max-h-64 overflow-auto">
      <h2 className="text-lg font-semibold mb-2">Expensive Chart</h2>
      {rendered}
    </div>
  );
};

export default ExpensiveChart;
