const express = require('express');
const chatRouter = require('./routes/Chat.route');
const messageRouter = require('./routes/message.route');
const userRouter = require('./routes/User.route');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use('/chat',chatRouter)
app.use('/msg',messageRouter)
app.use('/user',userRouter)


module.exports = app;
