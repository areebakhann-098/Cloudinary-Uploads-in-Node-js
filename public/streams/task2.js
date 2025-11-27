import {createReadStream, createWriteStream} from "fs";
import path from "path";

const inputFilePath= path.join(import.meta.dirname, "input.txt")
const outputFilePath= path.join(import.meta.dirname, "output.txt")

const readableStream= createReadStream(inputFilePath, { encoding: "utf8", highWaterMark: 16 });
const writeableStream= createWriteStream(outputFilePath);



// readableStream.pipe(writeableStream)

readableStream.on("error", (err)=>console.log(err)) ;
writeableStream.on("error", (err)=> console.log(err))


readableStream.on("data", (chunk)=>{
  console.log("buffer chunk", Buffer.from(chunk));
  console.log("Recieved Chunk", chunk)
  writeableStream.write(chunk)

});
readableStream.on("end", ()=>{
  console.log("file read completed")
  writeableStream.end();
});

writeableStream.on("finish", () => {
  console.log("Large file copied successfully using streams!");
});