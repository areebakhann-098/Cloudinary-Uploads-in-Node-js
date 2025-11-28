import fs from "fs";
import cloudinary from "../config/cloudinary.js";
import { File } from "../models/file.model.js"; 

export const uploadFile= async(req , res)=>{
    try {
        if(!req.file){
            return res.status(400).json({message: "file is required"});
        }

        const localPath= req.file.path;

        const uploadResult= await cloudinary.uploader.upload(localPath, {
            resource_type: "auto"
        });

        fs.unlinkSync(localPath);

          const savedFile = await File.create({
      url: uploadResult.secure_url,
      public_id: uploadResult.public_id,
    });
 res.status(200).json({
      success: true,
      fileUrl: uploadResult.secure_url,
      public_id: uploadResult.public_id,
    });
    } catch (error) {
            res.status(500).json({ message: "Upload failed", error: error.message });

    }
}