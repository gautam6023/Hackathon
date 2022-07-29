const { Router } = require("express");
const {
  signup,
  signin,
  signout,
  getUser,
  checkUser,
  getSpecificUser,
} = require("../controllers/User.controller");
const protect = require("../middlewares/protect");

const userRouter = Router();

userRouter.post("/", signup);
userRouter.post("/signin", signin);
userRouter.post("/signout", signout);
userRouter.get("/getuser", protect, getUser);
userRouter.post("/check", protect, checkUser);
userRouter.get("/userbyid/:id", protect, getSpecificUser);

module.exports = userRouter;
