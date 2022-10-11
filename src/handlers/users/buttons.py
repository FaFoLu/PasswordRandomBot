from aiogram import types
from loader import dp
from src.keyboard import kb_menu

@dp.message_handler(text='🔓Створіть простий пароль')
async def buttons(message: types.Message):
    await message.answer('Твій пароль:')

@dp.message_handler(text='🔒Створіть середній пароль')
async def buttons(message: types.Message):
    await message.answer('Твій пароль:')

@dp.message_handler(text='🔐Створіть надійний пароль')
async def buttons(message: types.Message):
    await message.answer('Твій пароль:')