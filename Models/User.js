const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        name :String,
        email :{ type:String, unique:true,required:true},
        password :{type:String, required:true},
        phone:String,
        photo:String,
        role:String,
    }
)

module.exports = mongoose.model('User',userSchema)