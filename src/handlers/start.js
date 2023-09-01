const { Composer } = require ("grammy");
const start = new Composer();
  
const text = `
<b>Мої вітання 👋</b>

Цей бот допоможе вам згенерувати пароль.

<b>GitHub:</b> github.com/FaFoLu/PasswordRandomBot
<b>Новини бота:</b> @WildPiranha
`;

start.command("start", async (ctx) => {

  await ctx.reply(text, {
    parse_mode: "HTML",
    disable_web_page_preview: true,
    reply_markup: {
      inline_keyboard: [
          [{text: "Generate Password", web_app: {url: process.env.WEBAPP_URL}}]
      ]
    },
  })
});

module.exports = start;