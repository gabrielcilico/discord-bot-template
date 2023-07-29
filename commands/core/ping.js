module.exports = {
  name: "ping",
  description: "Get BOT ping.",
  showHelp: false,

  execute({ client, inter }) {
    const apiLatency = Math.round(client.ws.ping);
    inter.reply(`Pong! [${apiLatency}ms]`);
  },
};
