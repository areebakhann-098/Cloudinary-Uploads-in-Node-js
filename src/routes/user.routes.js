import express from "express"
import { asyncWrapper } from "../middleware/asyncWrapper.middleware.js"
import { loginUser, registerUser } from "../controller/user.controller.js";
const router= express.Router();
router.post("/register", asyncWrapper(registerUser))
router.post("/login", asyncWrapper(loginUser))

export default router