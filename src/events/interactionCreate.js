const { InteractionType, EmbedBuilder } = require("discord.js");

const sendError = (inter, embed) => {
  inter.reply({ embeds: [embed], ephemeral: true });
  setTimeout(() => inter.deleteReply(), 1000 * 10);
};

module.exports = (client, inter) => {
  if (inter.type === InteractionType.ApplicationCommand) {
    const command = client.commands.get(inter.commandName);
    const embed = new EmbedBuilder()
      .setColor(client.config.colors.error)
      .setDescription("❌ Error! Please, contact developers team.");
    if (!command) {
      client.slash.delete(inter.commandName);
      sendError(inter, embed);
      return;
    }
    try {
      command.execute({ inter, client });
    } catch (e) {
      sendError(inter, embed);
      console.log(`Error on run [${command.name}]: ${e}`);
      throw e;
    }
  }
};
