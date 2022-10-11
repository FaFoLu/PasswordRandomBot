from aiogram import types

async def set_command(dp):
    await dp.bot.set_my_commands([
        types.BotCommand('start', 'Запустити бота')
    ])