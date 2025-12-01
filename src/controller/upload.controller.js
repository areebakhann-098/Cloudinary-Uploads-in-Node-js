import fs from "fs";
import cloudinary from "../config/cloudinary.js";
import { File } from "../models/file.model.js";

// export const uploadFile = async (req, res) => {
//   if (!req.file) {
//     return res.status(400).json({ message: "file is required" });
//   }

//   const localPath = req.file.path;

//   const uploadResult = await cloudinary.uploader.upload(localPath, {
//     resource_type: "auto",
//   });

//   fs.unlinkSync(localPath);

//   const savedFile = await File.create({
//     url: uploadResult.secure_url,
//     public_id: uploadResult.public_id,
//   });
//   res.status(200).json({
//     success: true,
//     fileUrl: uploadResult.secure_url,
//     public_id: uploadResult.public_id,
//   });
// };
export const uploadFile= async(req , res)=>{
  if(!req.File){
    res.status(404).json({
      message: "File not found"
    });
  }
  const localPath= req.file.path;

  const savedFile= cloudinary.uploader.upload(localPath, {
    resource_type: "auto"
  })
  console.log(localPath)
  fs.unlinkSync(localPath)

  const savedResult=  await File.create({
url: savedResult.secure.url,
public_id: savedResult.public_id
  });
  res.status(200).json({message: "filed succesfully created"})

  res.send().json({
    success: true,
    url: savedResult.secure.url,
    public_id: savedResult.public_id
  })
}