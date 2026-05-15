import dotenv from "dotenv" ; 
dotenv.config() ; 
import { SESClient } from "@aws-sdk/client-ses";

// Create SES client instance 

export const sesClient = new SESClient({
    region: process.env.AWS_REGION, // AWS region

    // AWS IAM credentials

    credentials: {
        accessKeyId: process.env.AWS_SES_ACCESS_KEY, 
        secretAccessKey: process.env.AWS_SES_SECRET_ACCESS_KEY
    }
})