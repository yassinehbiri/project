const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema(
    {
        
        category :{ type:String},
        date : String,
        marque :{ type:String},
        model :String,
        puissanceF :String,
        carburant :{ type:String},
        year :{ type:Number},
        boite:{ type:String},
        kilometrage:Number,
        title :{ type:String},
        description :{ type:String},
        gouvernorat:{ type:String},
        delegation:String,
        price:{ type:Number},
        phone:{ type:Number},
        carrosserie:{type:String},

        image:{ type:String},
        valid: Boolean,
        owner:{type:mongoose.Types.ObjectId,
        ref:'User'}
        
    }
)

module.exports = mongoose.model('Bcc',PostSchema)