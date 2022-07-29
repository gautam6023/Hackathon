const {Router} = require('express')
const {signup,signin,signout,getUser} = require('../controllers/User.controller')
const protect = require('../middlewares/protect')
const cookieParser = require("cookie-parser");

const userRouter = Router()
userRouter.use(cookieParser())
userRouter.post('/',signup)
userRouter.post('/signin',signin)
userRouter.post('/signout',signout)
userRouter.get('/getuser',protect,getUser)


module.exports = userRouter;
