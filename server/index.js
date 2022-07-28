const express = require('express');
const chatRouter = require('./routes/Chat.route');
const msgRouter = require('./routes/message.route');
const userRouter = require('./routes/User.route');
const cookieParser = require('cookie-parser')
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

app.use('/chat',chatRouter)
app.use('/msg',msgRouter)
app.use('/user',userRouter)


module.exports = app;
