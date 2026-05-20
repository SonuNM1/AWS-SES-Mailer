import express from "express";
import { getCampaigns, getCampaignById } from "../controllers/campaignController.js";

const router = express.Router() ; 

router.get('/campaigns', getCampaigns) ; 
router.get('/campaigns/:id', getCampaignById) ; 

export default router ; 