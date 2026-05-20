import { Campaign } from "../models/Campaign.js";

export const getOverview = async (req, res) => {
  try {
    const campaigns = await Campaign.find();

    const totalCampaigns = campaigns.length;

    const totalEmails = campaigns.reduce(
      (sum, campaign) => sum + campaign.totalEmails,
      0,
    );

    const totalSent = campaigns.reduce(
      (sum, campaign) => sum + campaign.sentCount,
      0,
    );

    const totalFailed = campaigns.reduce(
      (sum, campaign) => sum + campaign.failedCount,
      0,
    );

    res.json({
      success: true,
      totalCampaigns,
      totalEmails,
      totalSent,
      totalFailed,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
