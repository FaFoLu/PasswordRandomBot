const { Bot, Keyboard } = require ('grammy');
const text = require('./text');
require('dotenv').config();

const bot = new Bot(process.env.BOT_TOKEN);

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
    await ctx.reply(text.textWelcome, {
        reply_to_message_id: ctx.msg.message_id,
        reply_markup: keyboard,
        disable_web_page_preview: true,
        parse_mode: 'HTML',
    })
});


const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

bot.on('message:text', async (ctx) => {

    if (ctx.message.text == '🔓Створіть простий пароль') {

        var passwordLength = 5;
        var password = "";
        
        for (var i = 0; i <= passwordLength; i++) {
            var randomNumber = Math.floor(Math.random() * chars.length);
            password += chars.substring(randomNumber, randomNumber +1);
        }

        await ctx.reply('Твій пароль: ' + password)

    } else if (ctx.message.text == '🔒Створіть середній пароль') {

        var passwordLength = 8;
        var password = "";
        
        for (var i = 0; i <= passwordLength; i++) {
            var randomNumber = Math.floor(Math.random() * chars.length);
            password += chars.substring(randomNumber, randomNumber +1);
        }

        await ctx.reply('Твій пароль: ' + password)
        
    } else if (ctx.message.text == '🔐Створіть надійний пароль') {

        var passwordLength = 12;
        var password = "";
        
        for (var i = 0; i <= passwordLength; i++) {
            var randomNumber = Math.floor(Math.random() * chars.length);
            password += chars.substring(randomNumber, randomNumber +1);
        }

        await ctx.reply('Твій пароль: ' + password)
    } else {
        console.log('Else')
    }    

});

bot.start();
