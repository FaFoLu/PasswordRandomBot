const { Bot } = require("grammy");

const bot = new Bot(process.env.BOT_TOKEN);

bot.api.setWebhook(process.env.BOT_WEBHOOK);