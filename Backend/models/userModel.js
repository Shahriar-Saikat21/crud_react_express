import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userName : {
        type : String,
        required : true,
    },
    password : {
        type : String,
        required : true,
    }
});

export const User = mongoose.model('user',userSchema);