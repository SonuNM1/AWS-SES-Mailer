import { Campaign } from "../models/Campaign.js";

// get all campaigns - GET

export const getCampaigns = async (req, res) => {
  try {
    const campaigns = await Campaign.find().sort({
      createdAt: -1,
    });

    console.log("Campaign Count:", campaigns.length);

    console.log("Campaigns:");
    console.log(campaigns);

    res.json({
      success: true,
      count: campaigns.length,
      campaigns,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

// get single campaign - GET

export const getCampaignById = async (req, res) => {
  try {
    const campaign = await Campaign.findById(req.params.id);

    if (!campaign) {
      return res.status(404).json({
        success: false,
        message: "Campaign not found",
      });
    }

    res.json({
      success: true,
      campaign,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
