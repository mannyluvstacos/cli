const Application = require("@solfege/application");
const CommandsRegistry = require("../../lib/CommandsRegistry");
const Bundle = require("../../lib/Bundle");
const Command5 = require("./commands/Command5");

const application = new Application();
const registry = new CommandsRegistry();
registry.addCommand(new Command5());

application.setParameter("serviceContainer", {
  get: name => {
    if (name === "solfege_console_commands_registry") {
      return registry;
    }
  }
});

const bundle = new Bundle();
application.addBundle(bundle);

const parameters = process.argv.slice(2);
application.start(parameters);
