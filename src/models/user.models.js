import mongoose from 'mongoose';



const userSchema= new mongoose.Schema({
    UserName:{
        type: String,
        required: true,
        unique: true,
        lowercase:true
    },
    Email:{
        type: String,
        required: true,
        unique: true,
    },
    FullName:{
        type: String,
        required: true,
        lowercase:true
    },
    Password:{
        type: String,
        required: true,
    }
},{timestamps:true})

export const User=mongoose.model("User", userSchema);