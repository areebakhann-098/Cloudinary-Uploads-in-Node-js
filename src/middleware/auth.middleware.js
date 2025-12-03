import dotenv from "dotenv"
dotenv.config()
import { NotFoundError } from "../utils/notFound.util.js";
import jwt from "jsonwebtoken";
export const authMiddleware = async(req , res, next)=>{
const authHeader= req.headers.authorization
console.log( 'header data', authHeader)
if(!authHeader){
    throw new NotFoundError("token not provided")
}
const token= authHeader.split(' ')[1]
console.log(token);
const decode= jwt.verify(token, process.env.JWT_SECRET)
req.user={id: decode.id}
next()
}