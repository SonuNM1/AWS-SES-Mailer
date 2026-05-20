import mongoose from "mongoose";

const emailLogSchema = new mongoose.Schema(
  {
    // Related campaign
    campaignId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Campaign",
      required: true,
    },

    // Recipient email
    to: {
      type: String,
      required: true,
    },

    // Email subject
    subject: {
      type: String,
      required: true,
    },

    // Sent / Failed
    status: {
      type: String,
      default: "sent",
    },

    // AWS SES MessageId
    messageId: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const EmailLog = mongoose.model(
  "EmailLog",
  emailLogSchema
);