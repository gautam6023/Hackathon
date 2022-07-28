const {Schema,model} = require('mongoose')

const UserSchema = new Schema({
    firstName:{type:String,required:true},
    lastName:{type:String},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    imgUrl :{type:String}
},
{
    timestamps:true
})

const User = model('User',UserSchema)
module.exports = User;
