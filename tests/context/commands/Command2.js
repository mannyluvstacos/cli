module.exports = class Command2 {
  getName() {
    return "command2";
  }

  execute() {
    process.stdout.write("command2 output");
  }

  displayHelp() {
    process.stdout.write("command2 help");
  }
};
