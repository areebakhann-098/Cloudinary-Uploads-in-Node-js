import express from "express";
import {upload} from "../middleware/multer.js";
import { uploadFile } from "../controller/upload.controller.js";
import {asyncWrapper} from "../middleware/asyncWrapper.middleware.js"
import { deleteFile } from "../controller/upload.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/upload", asyncWrapper(authMiddleware), upload.single("file"), asyncWrapper(uploadFile))
router.delete("/delete", asyncWrapper(deleteFile))


export default router ;