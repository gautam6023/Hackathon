var cookieParser = require('cookie-parser')
const User = require("../models/User.model")
const { verifyToken } = require('../controllers/token.controller')

const protect = async (req, res, next) => {

    const token = req.cookies.token

    console.log(token)

    let payload
    try {

        payload = verifyToken(token)

    } catch (err) {

        return res.status(500).json({ err: err.message })

    }

    let UserData
    try {
        UserData = await User.findById(payload.id)
    } catch (err) {
        return res.status(500).json({ err: err.message })
    }


    if (!UserData) return res.status(401).send("Incorrect Token recieved")

    req.user = UserData
    next()

}


module.exports  =  protect
   
