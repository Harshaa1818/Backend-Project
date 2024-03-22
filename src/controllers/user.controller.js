//import mongoose from "mongoose";
//import {apierror} from "../utils/apierror.js";
//import {cloudinary} from cloudinary;
import {asynchandler} from "../utils/asynchandler.js";
import { User } from "../models/user.models.js";

const registerUser=asynchandler(async(req,res)=>{
//get details from user
//validate if all required fiels are filled
//check if user has already been created
//push user details in db
//
const {FullName,UserName,Email,Password}=req.body;

if(
    [FullName,UserName, Email, Password].some((e)=> e?.trim()==="")
    )
{
    //throw new apierror(401,"All fields are mandatory")
    return res
    .status(400)
    .json(400,"all fields are mandatory")
}

const existingUser=await User.findOne({
    $or:[{Email:   req.params.userdata},
        {UserName: req.params.userdata}]
    })

if(existingUser){
   // throw new apierror(401,"User already exist with same username or email id")

   return res
   .status(400)
   .json(400,"user already exist")

}

const newuser=await User.create({
    FullName,
    Email,
    Password,
    UserName
})
const regi_user = await User.findById(newuser._id).select(
    "-password -refreshToken"
)

if(!regi_user){
    //throw apierror(404,"User isn't registered , try again!")

    return res
    .status(400)
    .json(400,"User isn't registered , try again!")
}




return res
.status(200)
.json(201,"User has been registered succesfully")

    


})

export {registerUser}