import express from "express";
import { getCampaigns, getCampaignDetails } from "../controllers/campaignController.js";

const router = express.Router() ; 

router.get('/campaigns', getCampaigns) ; 
router.get('/campaign-details/:id', getCampaignDetails)

export default router ; 