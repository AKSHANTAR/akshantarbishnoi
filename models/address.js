const mongoose=require("mongoose");

const AddressSchema = new mongoose.Schema({

    location:{
        type:String,
        required:true
    },
    pincode:{
        type:String,
        required:true
    },
    userid:{
        type:String,
        required:true
    }
})
module.exports = mongoose.model('Address',AddressSchema);