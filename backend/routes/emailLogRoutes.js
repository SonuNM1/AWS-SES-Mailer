import express from "express"
import { getEmailLogs, getLogsByCampaign } from "../controllers/emailLogController.js"

const router = express.Router() ; 

// GET all logs 

router.get("/email-logs", getEmailLogs) ; 

// GET logs by campaign 

router.get("/email-logs/:campaignId", getLogsByCampaign) ; 

export default router ;
