// cli/cli.js
const { Command } = require("commander");
const analyzeLogs = require("./predictor");

const program = new Command();

program
  .command("analyze")
  .description("Analyze React performance logs")
  .requiredOption("-f, --file <path>", "Path to log file")
  .action((options) => {
    analyzeLogs(options.file);
  });

program.parse(process.argv);
