import mongoose from "mongoose";
 
const fileSchema= new mongoose.Schema({
    url: String,
    public_id: String
});
export const File = mongoose.model("File", fileSchema);
