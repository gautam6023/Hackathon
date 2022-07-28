const {Router} = require('express')
const {createMessage,getMessages} = require('../controllers/Message.controller')
const messageRouter = Router()

messageRouter.post('/',createMessage)
messageRouter.get('/:chatId',getMessages)


module.exports = messageRouter;