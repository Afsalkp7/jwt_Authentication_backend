import express from "express";
const router = express.Router()
import { registerStudent } from "../controllers/student.js";

router.post("/",registerStudent)


export default router;