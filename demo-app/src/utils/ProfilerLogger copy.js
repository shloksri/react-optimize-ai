// utils/ProfilerLogger.js

export function handleProfilerLog(
  id,
  phase,
  actualDuration,
  baseDuration,
  startTime,
  commitTime,
  interactions
) {
  const log = {
    component: id,
    phase,
    actualDuration: parseFloat(actualDuration.toFixed(2)),
    baseDuration: parseFloat(baseDuration.toFixed(2)),
    renderTime: parseFloat((commitTime - startTime).toFixed(2)),
    stateUpdates: 1, // Simulated
    propsReceived: 6, // Simulated
    propsUsed: 3, // Simulated
    optimizationApplied: "unknown",
  };

  console.log("📦 Profiler Log:", log);

  const logs = JSON.parse(localStorage.getItem("reactLogs") || "[]");
  logs.push(log);
  localStorage.setItem("reactLogs", JSON.stringify(logs));
}
