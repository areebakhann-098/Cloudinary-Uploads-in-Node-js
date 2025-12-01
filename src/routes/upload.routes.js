import express from "express";
import {upload} from "../middleware/multer.js";
import { uploadFile } from "../controller/upload.controller.js";
import {asyncWrapper} from "../middleware/asyncWrapper.middleware.js"

const router = express.Router();

router.post("/upload",  upload.single("file"), asyncWrapper(uploadFile))

export default router ;