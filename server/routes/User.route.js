const {Router} = require('express')
const {signup,signin,signout,getUser} = require('../controllers/User.controller')
const protect = require('../middlewares/protect')


const userRouter = Router()

userRouter.post('/',signup)
userRouter.post('/signin',signin)
userRouter.post('/signout',signout)
userRouter.get('/getuser',protect,getUser)


module.exports = userRouter;
