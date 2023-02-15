from aiogram import types
from loader import dp

from random import sample
import string

@dp.message_handler(text='🔓Створіть простий пароль')
async def buttons_1(message: types.Message):
    await message.answer(f"Твій пароль: <code>{''.join(sample(string.ascii_uppercase + string.ascii_lowercase, k=5))}</code>")

@dp.message_handler(text='🔒Створіть середній пароль')
async def buttons_2(message: types.Message):
    await message.answer(f"Твій пароль: <code>{''.join(sample(string.ascii_uppercase + string.ascii_lowercase, k=8))}</code>")

@dp.message_handler(text='🔐Створіть надійний пароль')
async def buttons_3(message: types.Message):
    await message.answer(f"Твій пароль: <code>{''.join(sample(string.ascii_uppercase + string.ascii_lowercase, k=11))}</code>")
