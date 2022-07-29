const express = require("express");
const chatRouter = require("./routes/Chat.route");
const msgRouter = require("./routes/Message.route");
const userRouter = require("./routes/User.route");
const tokenRouter = require("./routes/token.route.js")

const cookieParser = require("cookie-parser");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const corsOptions = {
  origin: true, //included origin as true
  credentials: true, //included credentials as true
};

app.use(cors(corsOptions));



app.use("/chat", chatRouter);
app.use("/msg", msgRouter);
app.use("/user", userRouter);


module.exports = app;
