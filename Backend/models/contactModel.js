import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    contactName:{
        type:String,
        required:true,
    },
    address:{
        type:String,
    },
    email:{
        type:String,
    },
    phone:{
        type:String,
        required:true,
    },
    user : {
        type : mongoose.Types.ObjectId,
        ref : 'user',
    }
});

export const Contact = mongoose.model('contact',contactSchema);