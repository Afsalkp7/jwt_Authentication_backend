import express from "express";
import cors from "cors";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import mongoose from "./database/db.js";
const PORT = 3001;
import studentRouter from './routes/student.js';

const app = express()

app.use(express.json())
app.use(cors())
app.use("/register",studentRouter)

app.listen(PORT,(()=>console.log("Server is running...")))