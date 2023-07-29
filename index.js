const { Client, GatewayIntentBits } = require("discord.js");

global.client = new Client({
  intents: [GatewayIntentBits.Guilds],
});
global.client.config = require("./config");

require("./src/loader");

global.client.login(global.client.config.app.token);
