import { Profiler } from "react";
import { handleProfilerLog } from "./utils/ProfilerLogger";
import UserCard from "./components/UserCard";
import ExpensiveChart from "./components/ExpensiveChart";

function App() {
  const simulateProps = {
    name: "Shlok Srivastava",
    age: 30,
    address: "123 Main St",
    phone: "123-456-7890",
    email: "shlok@email.com",
    occupation: "Software Engineer",
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">React AI Profiler Demo</h1>

      <Profiler id="UserCard" onRender={handleProfilerLog}>
        <UserCard {...simulateProps} />
      </Profiler>

      <Profiler id="ExpensiveChart" onRender={handleProfilerLog}>
        <ExpensiveChart />
      </Profiler>

      <button
        onClick={() => {
          const logs = localStorage.getItem("reactLogs");
          const blob = new Blob([logs], { type: "application/json" });
          const url = URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = url;
          a.download = "logs.json";
          a.click();
        }}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">
        📥 Download Logs
      </button>
    </div>
  );
}

export default App;
