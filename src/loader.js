const { readdirSync } = require("fs");
const { Collection } = require("discord.js");

global.client.commands = new Collection();
CommandsArray = [];

const events = readdirSync("./src/events/").filter((file) =>
  file.endsWith(".js")
);

console.log(`Loading events...`);
const eventsStartDate = new Date().getTime();

for (const file of events) {
  const event = require(`./events/${file}`);
  console.log(`=> Event ${file.split(".")[0]} loaded`);
  client.on(file.split(".")[0], event.bind(null, client));
  delete require.cache[require.resolve(`./events/${file}`)];
}

console.log(
  `All events loaded in ${new Date().getTime() - eventsStartDate} seconds...`
);

console.log(`Loading commands...`);
const commandsStartDate = new Date().getTime();

readdirSync("./src/commands/").forEach((dirs) => {
  const commands = readdirSync(`./src/commands/${dirs}`).filter((files) =>
    files.endsWith(".js")
  );

  for (const file of commands) {
    const command = require(`./commands/${dirs}/${file}`);
    if (command.name && command.description) {
      CommandsArray.push(command);
      console.log(`=> Command [${command.name.toLowerCase()}] loaded.`);
      global.client.commands.set(command.name.toLowerCase(), command);
      delete require.cache[require.resolve(`./commands/${dirs}/${file}`)];
    }
    console.log(
      `All commands loaded in ${
        new Date().getTime() - commandsStartDate
      } seconds...`
    );
  }
});

client.on("ready", (client) => {
  client.application.commands.set(CommandsArray);
  console.log(`=> ${client.user.username} is running...`);
});
