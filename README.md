# discord-bot-template

A default template for discord bot, feel free to use.

### 🕸️ Configuration

Open `config.js` located in the root.

**Configuration fields**

| Field         | Description                                                                      |
| ------------- | -------------------------------------------------------------------------------- |
| `name`        | BOT name                                                                         |
| `app.token`   | Discord OAuth Token. ([docs](https://discord.com/developers/docs/topics/oauth2)) |
| `app.credits` | This can be used in the footer of Embed Messages.                                |
| `app.client`  | Client ID (Discord)                                                              |
| `app.guild`   | Guild ID                                                                         |
| `colors`      | Add your default colors                                                          |
| `opt`         | Can be used to set default options for yout bot.                                 |

```javascript
module.exports = {
  name: "Template BOT",

  app: {
    token: "DISCORD_TOKEN",
    credits: "Made with ❤️ by cilico",
    client: "CLIENT_ID",
    guild: "GUILD_ID",
  },

  colors: {
    // Must have the colors that will be used in Embed Messages.
  },

  opt: {},
};
```

Feel free to add new fields to this file.

---

### ✔️ Installation

**Prerequisites**

- Install [NodeJs](https://nodejs.org/en)

**Installation command**

```
yarn
```

OR

```
npm install
```

---

### 📚 Reference documentation

- [DiscordJS](https://discordjs.guide/)
- [Discord](https://discord.com/developers/docs/intro)

---

Remember to give proper credits in your project.

Made with ❤️ by [cilico](https://github.com/gabrielcilico).
