import logging

from aiogram.utils.exceptions import Unauthorized, MessageTextIsEmpty, CantParseEntities

from loader import dp

@dp.errors_handler()
async def errors_handler(update, exception):

    if isinstance(exception, Unauthorized):
        logging.info(f'Invalid token {exception}')
        return True

    if isinstance(exception, MessageTextIsEmpty):
        logging.info('Empty message')
        return True

    if isinstance(exception, CantParseEntities):
        logging.info(f'Cant parse entities: {exception.args}')
        return True

    logging.exception(f'Update: {update} \n'
                      f'Exception: {exception}')

