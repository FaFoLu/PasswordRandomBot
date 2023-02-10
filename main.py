async def on_startup(dp):

    from loader import db
    from src.utils.dp_api.dp_gino import on_startup
    print('Database connection')
    await on_startup(dp)

    print('Creation database')
    await db.gino.create_all()
    print('Done')

    from src.utils.notification_admin import on_startup_notify
    await on_startup_notify(dp)

    from src.utils.bot_command import set_command
    await set_command(dp)

    print('Bot launched!')

if __name__ == '__main__':
    from aiogram import executor
    from src.handlers import dp

    executor.start_polling(dp, on_startup=on_startup)
