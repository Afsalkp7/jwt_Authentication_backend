import mongoose from "mongoose";
const MONGODB_URI = "mongodb+srv://afsalkpmanu31:afsalkp123@cluster0.yzytvxu.mongodb.net/jwtauth?retryWrites=true&w=majority&appName=Cluster0";

export default mongoose.connect(MONGODB_URI)
.then(()=>console.log("connected"))
.catch(()=>console.log("error occured"))