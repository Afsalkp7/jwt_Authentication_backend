import express from "express";
import cors from "cors";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import mongoose from "./database/db.js";

const app = express()

app.listen(3001,(()=>console.log("Server is running...")))