const User = require('../models/User.model')

const signup = async(req,res)=>{
  
    let UserData
    try{
    UserData = await User.create(req.body)
    }catch(err){
    return res.status(500).json({err:err.message})
     }
   
}


module.exports = {
signup,
// signin,
// getUser
}