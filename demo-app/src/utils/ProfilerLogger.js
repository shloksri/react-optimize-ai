const performanceLogs = [];

export function logProfilerData(
  id,
  phase,
  actualDuration,
  baseDuration,
  startTime,
  commitTime,
  interactions
) {
  // Simulated props tracking per component
  const propsMap = {
    StatsPanel: { received: 5, used: 2 },
    SettingsForm: { received: 5, used: 2 },
    ProductTile: { received: 5, used: 2 },
    CommentBox: { received: 5, used: 2 },
    UserList: { received: 1, used: 1 }, // Adjust if needed
  };

  const { received, used } = propsMap[id] || { received: 0, used: 0 };

  const logEntry = {
    component: id,
    phase,
    actualDuration: Number(actualDuration.toFixed(2)),
    baseDuration: Number(baseDuration.toFixed(2)),
    renderTime: Number(commitTime.toFixed(2)),
    stateUpdates: 1, // This can be refined if you track internal state
    propsReceived: received,
    propsUsed: used,
    optimizationApplied: "unknown",
  };

  performanceLogs.push(logEntry);

  // Save to file (simulate)
  console.log("🔍 Log Entry:", logEntry);

  // You can also export this later as a JSON blob
  window.__REACT_PERF_LOGS__ = performanceLogs;
}
