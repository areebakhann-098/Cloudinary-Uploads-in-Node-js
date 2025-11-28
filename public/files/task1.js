import fs from "fs";
import path from "path"
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputFilePath= path.join(__dirname, "input.txt")
const outputFilePath= path.join(__dirname,  "output.txt")


fs.readFile(inputFilePath, (err, data)=>{
    if(err) console.log(err)
        else{
    console.log( "file succesfully read", data.toString())}
});
fs.writeFile(outputFilePath, "Hi", (err)=>{
    if(err) console.log(err)
        else{
    console.log("data written succesfuly to output.txt")}
});

