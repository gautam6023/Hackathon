const {Router} = require('express')
const {signup,signin,getUser} = require('../controllers/User.controller')


const userRouter = Router()

userRouter.post('/',signup)
// userRouter.post('/signin',signin)
// userRouter.get('/:userId',getUser)


module.exports = userRouter;
