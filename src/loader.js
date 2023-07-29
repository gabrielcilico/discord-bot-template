const { readdirSync } = require("fs");
const { Collection } = require("discord.js");

client.commands = new Collection();
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
      client.commands.set(command.name.toLowerCase(), command);
      delete require.cache[require.resolve(`../commands/${dirs}/${file}`)];
      console.log(
        `All commands loaded in ${new Date().getTime() - startDate} seconds...`
      );
      return;
    }
    console.log(`=> Command [${command.name.toLowerCase()}] failed.`);
  }
});

client.on("ready", (client) => {
  if (client.config.app.global) {
    client.application.commands.set(CommandsArray);
    return;
  } else {
    client.guilds.cache
      .get(client.config.app.guild)
      .commands.set(CommandsArray);
  }
});
