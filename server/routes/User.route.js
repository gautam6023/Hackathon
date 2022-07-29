const {Router} = require('express')
const {signup,signin,signout,getUser} = require('../controllers/User.controller')


const userRouter = Router()

userRouter.post('/',signup)
userRouter.post('/signin',signin)
userRouter.post('/signout',signout)
userRouter.get('/:userId',getUser)


module.exports = userRouter;
