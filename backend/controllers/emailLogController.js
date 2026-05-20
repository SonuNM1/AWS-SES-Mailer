import { EmailLog } from "../models/EmailLog.js";

// GET all email logs

export const getEmailLogs = async (req, res) => {
  try {
    const logs = await EmailLog.find().sort({
      createdAt: -1,
    });

    res.json({
      success: true,
      count: logs.length,
      logs,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

// GET logs by campaign

export const getLogsByCampaign = async (req, res) => {
  try {
    const logs = await EmailLog.find({
      campaignId: req.params.campaignId,
    });

    res.json({
      success: true,
      count: logs.length,
      logs,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
