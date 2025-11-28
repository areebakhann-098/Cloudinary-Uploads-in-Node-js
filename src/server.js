import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import uploadRoutes from "././src/routes/upload.routes.js";
const app=express();
const PORT = 5000
 app.use(express.json());
  mongoose.connect(process.env.MONGO_URI)
  .then(()=> console.log("DB Connected"))
  .catch((err)=> console.log(err))

app.use("/api", uploadRoutes);

 app.listen(PORT, ()=>
    console.log(`server is running at http://localhost:${PORT}`));