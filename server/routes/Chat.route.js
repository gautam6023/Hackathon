const {Router} = require('express')
const {createChat,getUserChats,getChat} = require('../controllers/Chat.controller')

const chatRouter = Router()

chatRouter.post('/',createChat)
chatRouter.get('/:userId',getUserChats)
chatRouter.get('/find/:userId/:receiverId',getChat)

module.exports = chatRouter;
