module.exports = {
  name: "sum",
  description: "Sum two numbers.",
  options: [
    {
      name: "firstNumber",
      description: "the first number of the sum",
      type: ApplicationCommandOptionType.String,
      required: true,
    },
    {
      name: "secondNumber",
      description: "the second number of the sum",
      type: ApplicationCommandOptionType.String,
      required: true,
    },
  ],

  execute({ inter }) {
    const firstNumber = parseInt(inter.options.getString("firstNumber"));
    const secondNumber = parseInt(inter.options.getString("secondNumber"));
    inter.reply(
      `${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`
    );
  },
};
