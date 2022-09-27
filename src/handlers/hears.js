const { Composer } = require ('grammy');
const handlers = new Composer()

const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

function randomPassword(passLength) {
    var password = '';
    for (var i = 0; i <= passLength; i++) {
        const randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber +1);
    }
    return password
};

handlers.hears('🔓Створіть простий пароль', async (ctx) =>{
    await ctx.replyWithHTML(`Твій пароль: <code>${randomPassword(5)}</code>`)
});

handlers.hears('🔒Створіть середній пароль', async (ctx) =>{
    await ctx.replyWithHTML(`Твій пароль: <code>${randomPassword(8)}</code>`)
});

handlers.hears('🔐Створіть надійний пароль', async (ctx) =>{
    await ctx.replyWithHTML(`Твій пароль: <code>${randomPassword(12)}</code>`)
});

module.exports = handlers;