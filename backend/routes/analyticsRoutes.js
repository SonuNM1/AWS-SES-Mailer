import express from "express"

import { getOverview } from "../controllers/analyticsController.js"

const router = express.Router() ; 

router.get("/analytics/overview", getOverview) ; 

export default router ; 