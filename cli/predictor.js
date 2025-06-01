// cli/predictor.js
const { spawn } = require("child_process");
const fs = require("fs");

function analyzeLogs(filePath) {
  const logs = JSON.parse(fs.readFileSync(filePath));
  const python = spawn("python3", ["model/predict.py"]);

  python.stdin.write(JSON.stringify(logs));
  python.stdin.end();

  python.stdout.on("data", (data) => {
    console.log(data.toString());
  });

  python.stderr.on("data", (data) => {
    console.error("Error:", data.toString());
  });
}

module.exports = analyzeLogs;
