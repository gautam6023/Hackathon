const mongoose = require('mongoose')

const db = 'mongodb://localhost:27017/transchat'

const connect = async()=>{
 return await mongoose.connect(db)
}
module.exports = {connect,db}