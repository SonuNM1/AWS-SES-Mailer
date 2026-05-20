
import fs from "fs";
import csv from "csv-parser";
import { emailQueue } from "../queue/emailQueue.js";
import { Campaign } from "../models/Campaign.js";

export const uploadCSV = async (req, res) => {
  try {

    const results = [];
    fs.createReadStream(req.file.path)
      .pipe(csv())
      .on("data", (data) => {
        results.push(data);
      })

      .on("end", async () => {
        const campaign = await Campaign.create({
          name: `Campaign-${Date.now()}`,
          totalEmails: results.length,
        });

        console.log(
          "Campaign Created:",
          campaign._id
        );

        for (const row of results) {
          await emailQueue.add(
            "send-email",
            {
              to: row.email,
              subject: row.subject,
              campaignId: campaign._id,
            }
          );
        }

        res.json({
          success: true,

          queued: results.length,

          // MongoDB campaign id
          campaignId: campaign._id,
        });
      });

  } catch (error) {

    console.error(
      "CSV UPLOAD ERROR"
    );

    console.error(error);

    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};