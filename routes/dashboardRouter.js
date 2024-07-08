import express from "express"
const router = express.Router()
import { dashboardView } from "../controllers/dashboardController.js";
import { verifyUser } from "../middlewares/auth.js";

router.get("/",verifyUser,dashboardView)


export default router;