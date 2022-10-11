import logging

import loader

from aiogram import Dispatcher

from src.data.config import ADMIN

async def on_startup_notify(dp: Dispatcher):
    try:
        text = "Bot launched!"
        await dp.bot.send_message(chat_id=ADMIN, text=text)
    except Exception as err:
        logging.exception(err)

