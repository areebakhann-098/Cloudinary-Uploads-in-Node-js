import express from "express";
import {upload} from "../middleware/multer.js";
import { uploadFile } from "../controller/upload.controller.js";

const router = express.Router();

router.post("/upload", upload.single("file"), uploadFile)

export default router ;