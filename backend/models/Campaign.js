import mongoose from "mongoose";

// Campaign schema 

const campaignSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true  
    }, 
    totalEmails: {
        type: Number, 
        required: true  
    }, 
    sentCount: {
        type: Number, 
        default: 0 
    }, 
    failedCount: {
        type: Number, 
        default: 0
    }, 
    status: {
        type: String, 
        default: "queued"
    }, 
}, 
{timestamps: true}
)

export const Campaign = mongoose.model("Campaign", campaignSchema) ; 