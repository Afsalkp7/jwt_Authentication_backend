import express from "express";
import cors from "cors";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import mongoose from "./database/db.js";
const PORT = 3001;
import studentRouter from './routes/student.js';
import loginRouter from './routes/login.js'
import dashboardRouter from './routes/dashboardRouter.js'

const app = express()
app.use(cookieParser())
app.use(express.json())
app.use(cors({
    origin:["http://localhost:5173/"],
    credentials:true
}))
app.use("/register",studentRouter)
app.use("/login",loginRouter)
app.use("/dashboard",dashboardRouter)

app.listen(PORT,(()=>console.log("Server is running...")))