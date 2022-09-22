const { Bot, Keyboard } = require ('grammy');
const { hydrateReply } = require('@grammyjs/parse-mode'); 
const text = require('./text');
require('dotenv').config();

const bot = new Bot(process.env.BOT_TOKEN);

bot.use(hydrateReply);

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

const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

function randomPassword(passLength) {
    var password = '';
    for (var i = 0; i <= passLength; i++) {
        const randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber +1);
    }
    return password
};

bot.on('message:text', async (ctx) => {

    if (ctx.message.text == '🔓Створіть простий пароль') {
        await ctx.replyWithHTML(`Твій пароль: <code>${randomPassword(5)}</code>`)
    } else if (ctx.message.text == '🔒Створіть середній пароль') {
        await ctx.replyWithHTML(`Твій пароль: <code>${randomPassword(8)}</code>`)
    } else if (ctx.message.text == '🔐Створіть надійний пароль') {
        await ctx.replyWithHTML(`Твій пароль: <code>${randomPassword(11)}</code>`)
    } else {
        console.log('Else')
    }
});

bot.start();
