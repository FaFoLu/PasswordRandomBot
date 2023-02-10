from aiogram import types
from loader import dp
from src.keyboard import kb_menu

from src.utils.dp_api import quick_commands as commands

@dp.message_handler(commands=['start'])
async def command_start(message: types.Message):
    try:
        user = await commands.select_user(message.from_user.id)
        if user.status == 'active':
            await message.answer("""
<b>Мої вітання</b> 👋

Цей бот допоможе вам згенерувати пароль. Просто виберіть одну з наступних кнопок:

<b>GitHub:</b> github.com/FaFoLu/PasswordRandomBot
<b>Новини бота:</b> @WildPiranha
""", disable_web_page_preview=True, reply_markup=kb_menu)
        elif user.status == 'baned':
            await message.answer('Baned!')

    except Exception:
        await commands.add_user(user_id=message.from_user.id,
                                first_name=message.from_user.first_name,
                                last_name=message.from_user.last_name,
                                username=message.from_user.username,
                                status='active')
        await message.answer("""
<b>Мої вітання</b> 👋

Цей бот допоможе вам згенерувати пароль. Просто виберіть одну з наступних кнопок:

<b>GitHub:</b> github.com/FaFoLu/PasswordRandomBot
<b>Новини бота:</b> @WildPiranha
""", disable_web_page_preview=True, reply_markup=kb_menu)
