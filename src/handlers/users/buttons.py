from aiogram import types
from loader import dp

from random import sample
import string

randomPassword_1 = ''.join(sample(string.ascii_uppercase + string.ascii_lowercase, k=5))
randomPassword_2 = ''.join(sample(string.ascii_uppercase + string.ascii_lowercase, k=8))
randomPassword_3 = ''.join(sample(string.ascii_uppercase + string.ascii_lowercase, k=11))

@dp.message_handler(text='🔓Створіть простий пароль')
async def buttons(message: types.Message):
    await message.answer(f"Твій пароль: <code>{randomPassword_1}</code>")

@dp.message_handler(text='🔒Створіть середній пароль')
async def buttons(message: types.Message):
    await message.answer(f"Твій пароль: <code>{randomPassword_2}</code>")

@dp.message_handler(text='🔐Створіть надійний пароль')
async def buttons(message: types.Message):
    await message.answer(f"Твій пароль: <code>{randomPassword_3}</code>")
