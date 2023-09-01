const { Bot, GrammyError, HttpError, webhookCallback  } = require("grammy");

require("dotenv").config();

const bot = new Bot(process.env.BOT_TOKEN);

const startCommand = require("../src/handlers/start");

bot.catch((err) => {
    const e = err.error;
    if (e instanceof GrammyError) {
      console.error(e.description);
    } else if (e instanceof HttpError) {
      console.error("Не вдалося звʼязатися з Telegram:", e);
    } else {
      console.error("Невідома помилка:", e);
    }
});

bot.use(startCommand);

module.exports =  webhookCallback(bot, "http");