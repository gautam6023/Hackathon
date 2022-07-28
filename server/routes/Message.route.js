const {Router} = require('express')
const {createMessage,getMessages} = require('../controllers/Message.controller')


const msgRouter = Router()

msgRouter.post('/',createMessage)
msgRouter.get('/:chatId',getMessages)


module.exports = msgRouter;