const { ApplicationCommandOptionType } = require("discord.js");

module.exports = {
  name: "sum",
  description: "Sum two numbers.",
  showHelp: true,
  options: [
    {
      name: "firstnumber",
      description: "the first number of the sum",
      type: ApplicationCommandOptionType.String,
      required: true,
    },
    {
      name: "secondnumber",
      description: "the second number of the sum",
      type: ApplicationCommandOptionType.String,
      required: true,
    },
  ],

  execute({ inter }) {
    const firstNumber = parseInt(inter.options.getString("firstnumber"));
    const secondNumber = parseInt(inter.options.getString("secondnumber"));
    inter.reply(
      `${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`
    );
  },
};
