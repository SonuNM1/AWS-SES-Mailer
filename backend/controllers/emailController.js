import { emailQueue } from "../queue/emailQueue.js";

export const sendBulkEmails = async (req, res) => {
    try{
        const {emails} = req.body ; 

        // validate emails input 

        if(!emails || !Array.isArray(emails)){
            return res.status(400).json({
                success: false, 
                message: "emails array required"
            })
        }

        // loop through all emails 

        for (const email of emails) {
            // add each email as queue job 

            await emailQueue.add(
                "send-email", 
                email 
            )
        }

        res.json({
            success: true, 
            queued: emails.length 
        })
    }catch(error){
        console.error("Email controller error: ", error) ; 
        res.status(500).json({
            success: false, 
            error: error.response 
        })
    }
}