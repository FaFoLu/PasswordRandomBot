const { Bot, Keyboard } = require ('grammy');
const { hydrateReply } = require('@grammyjs/parse-mode'); 
const text = require('./text');
const handlers = require('./handlers/hears');
require('dotenv').config();

const bot = new Bot(process.env.BOT_TOKEN);

bot.use(hydrateReply);
bot.use(handlers);

bot.catch((error) => {
    const ctx = error.ctx;
    console.log(`Error while handling update: ${ctx.message.text}`)
});

const keyboard = new Keyboard()
  .text("🔓Створіть простий пароль").row()
  .text("🔒Створіть середній пароль").row()
  .text("🔐Створіть надійний пароль") 
  .resized();

bot.command('start', async (ctx) => {
    await ctx.replyWithHTML(text.textWelcome, {
        reply_markup: keyboard,
        disable_web_page_preview: true,
    })
});

bot.start({
    onStart: async (botInfo) => {
     console.log('Bot launched!')
     console.log(botInfo)
    }
});
