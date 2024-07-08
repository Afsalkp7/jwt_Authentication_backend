import express from "express"
const router = express.Router()
import { dashboardView } from "../controllers/dashboardController.js";


router.get("/",dashboardView)


export default router;