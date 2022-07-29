const User = require('../models/User.model')
const { generateToken, verifyToken } = require('./token.controller')



const signup = async (req, res) => {

    const { email } = req.body;

    let UserData
    try {
        UserData = await User.findOne({ email })
    } catch (err) {
        return res.status(500).json({ err: err.message })
    }

    if (UserData) return res.status(500).json({ message: "User already exists" })


    try {
        UserData = await User.create(req.body)
    } catch (err) {
        return res.status(500).json({ err: err.message })
    }


    try {
        const token = generateToken(UserData)
        res.cookie('token', token, {
            httpOnly: true
        })

       return res.status(200).send({acknowledge:true })

    } catch (err) {
        return res.status(500).send({ err: err.message })
    }


}


const signin = async (req, res) => {

    const { email, password } = req.body;

    let UserData
    try {
        UserData = await User.findOne({ email })
    } catch (err) {
        return res.status(500).json({ err: err.message })
    }

    if (!UserData) return res.status(500).json({ message: "No User found of this email" })


    try {

        const match = UserData.checkpassword(password)

    } catch (err) {
        return res.status(500).json({ err: err.message })
    }

    if (!match) return res.status(500).json({ message: "Invalid Password received" })

    try {
        const token = generateToken(UserData)
    
        res.cookie('token', token, {
            httpOnly: true
        })
        
        res.redirect('http://localhost:3000/home')

        return res.status(200).send({acknowledge:true })
    
    } catch (err) {
        return res.status(500).send({ err: err.message })
    }


}

 const signout = async (req,res)=>{
   
    res.clearCookie('token')

    res.redirect('http://localhost:3000/signin')

    res.status(200).json({message:"Signed-out Successfully"})
    
 }


 


const getUser = async (req, res) => {

    const { userId } = req.params;

    let UserData
    try {
        UserData = await User.findOne({ id: userId })
        return res.status(200).json(UserData)
    } catch (err) {
        return res.status(500).json({ err: err.message })
    }

}


module.exports = {
    signup,
    signin,
    signout,
    getUser
}