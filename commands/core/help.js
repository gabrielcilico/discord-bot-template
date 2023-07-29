const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "help",
  description: "Should show all the commands this bot has",
  showHelp: false,

  execute({ client, inter }) {
    const commands = client.commands.filter((x) => x.showHelp !== false);

    const embed = new EmbedBuilder()
      .setColor(client.config.colors.warn)
      .setAuthor({
        name: client.user.username,
        iconURL: client.user.displayAvatarURL({ size: 1024, dynamic: true }),
      })
      .setDescription("Here we go! This is all the commands I have.")
      .addFields([
        {
          name: `I have ${commands.size} commands available.`,
          value: commands
            .map((command) => `- **${command.name}**: ${command.description} `)
            .join("\n"),
        },
      ])
      .setTimestamp()
      .setFooter({
        text: client.config.credits,
        iconURL: inter.member.avatarURL({ dynamic: true }),
      });

    inter.reply({ embeds: [embed] });
  },
};
