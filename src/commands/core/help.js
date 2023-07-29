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
      .setDescription("🥳 You can add more commands.")
      .addFields([
        {
          name: `😎 I have ${commands.size} commands available.`,
          value: commands
            .map((command) => `- **${command.name}**: ${command.description} `)
            .join("\n"),
        },
      ])
      .setTimestamp()
      .setFooter({
        text:
          client.config.app.credits ?? `Requested by ${inter.user.username}`,
        iconURL: inter.member.avatarURL({ dynamic: true }),
      });

    inter.reply({ embeds: [embed], ephemeral: true });
  },
};
