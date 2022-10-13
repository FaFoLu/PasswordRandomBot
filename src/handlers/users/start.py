from aiogram import types
from loader import dp
from src.keyboard import kb_menu

@dp.message_handler(commands=['start'])
async def command_start(message: types.Message):
    await message.answer("""
<b>Мої вітання</b> 👋

Цей бот допоможе вам згенерувати пароль. Просто виберіть одну з наступних кнопок:

<b>GitHub:</b> github.com/FaFoLu/PasswordRandomBot
<b>Новини бота:</b> @WildPiranha
    """
    , disable_web_page_preview=True, reply_markup=kb_menu)
