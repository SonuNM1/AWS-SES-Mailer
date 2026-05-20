import dns from "dns";

dns.setServers([
  "8.8.8.8",
  "1.1.1.1"
]);

import dotenv from "dotenv";
dotenv.config();

import { Worker } from "bullmq";
import { sendEmail } from "../services/sendEmail.js";
import { Campaign } from "../models/Campaign.js";
import { connectDB } from "../config/db.js";
import { EmailLog } from "../models/EmailLog.js";

console.log(process.env.MONGO_URI);

await connectDB();

const worker = new Worker(
  "emails",
  async (job) => {

    try {
      console.log("Processing Job");
      console.log(job.data);

      const response = await sendEmail({
        to: job.data.to,
        subject: job.data.subject,
        text: "Hello from AWS SES + BullMQ",
      });

      console.log("Email sent successfully");

      // saving email log in db 

      await EmailLog.create({
        campaignId: job.data.campaignId, 
        to: job.data.to, 
        subject: job.data.subject, 
        status: "sent", 
        messageId: response.MessageId 
      })

      console.log("email log saved")

      console.log(
        "Updating campaign:",
        job.data.campaignId
      );

      const updatedCampaign =
        await Campaign.findByIdAndUpdate(
          job.data.campaignId,
          {
            $inc: {
              sentCount: 1,
            },
          },
          {
            new: true,
          }
        );

      console.log(
        "Campaign after update:"
      );

      console.log(updatedCampaign);

      // check latest campaign status 

      const campaign = await Campaign.findById(job.data.campaignId) ; 

      // if all emails sent 

      if(campaign.sentCount === campaign.totalEmails) {
        
        // Mark campaign completed 

        campaign.status = "completed" ; 

        await campaign.save() ; 

        console.log(`Campaign completed: ${campaign._id}`) ; 

      }

    } catch (error) {

      console.error(
        "Worker processing error:"
      );

      console.error(error);

      try {

        await Campaign.findByIdAndUpdate(
          job.data.campaignId,
          {
            $inc: {
              failedCount: 1,
            },
          }
        );

      } catch (dbError) {

        console.error(
          "Failed count update error:"
        );

        console.error(dbError);
      }
      throw error;
    }
  },

  {
    connection: {
      host: "127.0.0.1",
      port: 6379,
    },

    limiter: {
      max: 5,
      duration: 1000,
    },
  }
);

worker.on(
  "failed",
  (job, err) => {

    console.error(
      "Worker failed:"
    );

    console.error(err);
  }
);

console.log(
  "Email worker started..."
);