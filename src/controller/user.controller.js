import { user } from "../models/user.model.js";
import {BadRequestError} from "../utils/badRequestion.util.js";
import {NotFoundError} from "../utils/notFound.util.js";
import {UnauthenticateError} from "../utils/unauthenticate.util.js";
import bcrypt from "bcrypt"
import dotenv from "dotenv";
dotenv.config()
import jwt from "jsonwebtoken"
 export const registerUser= async(req, res)=>{
    const {name, email, password}= req.body
    if(!name, !email, !password){
        throw new BadRequestError("all feilds are required")
    }
    const hashedPassword = await bcrypt.hash(password, 10)

    const savedData= await user.create({
        name,
        email,
        password: hashedPassword
    })
 res.status(201).json({ success: true,  message: 'User registered successfully' });
 }

  export const loginUser= async(req, res)=>{
const { email, password }= req.body;
if(!email, !password){
    throw new BadRequestError("all feilds are required")
}
 const findUser= await user.findOne({email})
 if(!findUser) {
    throw new NotFoundError("user not found")
 }
 const isMatch= await bcrypt.compare(password, findUser.password)
 if(!isMatch){
    throw new UnauthenticateError("invalid password")
 }
 const token= jwt.sign({id: findUser._id}, process.env.JWT_SECRET,{
    expiresIn: "1h"
 })
 res.status(200).json({success: true, message: "login successfully", token})
 }
