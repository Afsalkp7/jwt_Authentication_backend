import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()


const MONGODB_URI = process.env.MONGODB_URI;

export default mongoose.connect(MONGODB_URI)
.then(()=>console.log("connected"))
.catch(()=>console.log("error occured"))