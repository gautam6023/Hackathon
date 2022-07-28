const {Router} = require('express')

const userRouter = Router()

userRouter.post('/',createUser)
userRouter.get('/:userId',getUser)


module.exports = userRouter;
