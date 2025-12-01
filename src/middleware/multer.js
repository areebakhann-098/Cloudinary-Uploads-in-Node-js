import path from "path";
import multer from "multer";

const storage= multer.diskStorage({
    destination: function(req, file, cb){ 
        return cb(null, "public/multer_file");
    },
    filename: function (req, file, cb){
        const ext = path.extname(file.originalname);
    cb(null, Date.now() + ext);
    }
});
 export const upload = multer({ storage })


 