import mongoose from "mongoose";

// Campaign schema 

const campaignSchema = new mongoose.Schema({
    name: {
        type: String 
    }, 
    totalEmails: {
        type: Number 
    }, 
    status: {
        type: String, 
        default: "queued"
    }, 
}, 
{timestamps: true}
)

export const Campaign = mongoose.model("Campaign", campaignSchema) ; 