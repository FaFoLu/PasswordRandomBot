from aiogram.types import ReplyKeyboardMarkup, KeyboardButton

kb_menu = ReplyKeyboardMarkup(
    keyboard=[
        [
            KeyboardButton(text='🔓Створіть простий пароль')
        ],
        [
            KeyboardButton(text='🔒Створіть середній пароль')
        ],
        [
            KeyboardButton(text='🔐Створіть надійний пароль')
        ]
    ],
    resize_keyboard=True
)