const { readdirSync } = require("fs");
const { Collection } = require("discord.js");

global.client.commands = new Collection();
CommandsArray = [];

console.log(`Loading commands...`);
const startDate = new Date().getTime();

readdirSync("./commands/").forEach((dirs) => {
  const commands = readdirSync(`./commands/${dirs}`).filter((files) =>
    files.endsWith(".js")
  );

  for (const file of commands) {
    const command = require(`../commands/${dirs}/${file}`);
    if (command.name && command.description) {
      CommandsArray.push(command);
      console.log(`=> Command [${command.name.toLowerCase()}] loaded.`);
      global.client.commands.set(command.name.toLowerCase(), command);
      delete require.cache[require.resolve(`../commands/${dirs}/${file}`)];
    }
    console.log(
      `All commands loaded in ${new Date().getTime() - startDate} seconds...`
    );
  }
});

client.on("ready", (client) => {
  client.application.commands.set(CommandsArray);
  console.log(`=> ${client.user.username} is running...`);
});
