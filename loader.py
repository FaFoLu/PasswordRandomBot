from aiogram import Bot, Dispatcher, types

from src.utils.dp_api.dp_gino import db

from src.data import config

bot = Bot(token=config.BOT_TOKEN, parse_mode=types.ParseMode.HTML)

dp = Dispatcher(bot)

__all__ = ['bot', 'storage', 'dp', 'db']
