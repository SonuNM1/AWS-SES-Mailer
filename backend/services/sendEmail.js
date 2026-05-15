import { SendEmailCommand } from "@aws-sdk/client-ses";
import { sesClient } from "./sesClient.js";

export const sendEmail = async ({
    to, 
    subject, 
    text 
}) => {
    try{

        // creating SES email command 

        const command = new SendEmailCommand({
            Source: "dev.relevantsearchmedia@gmail.com",    // sender email 

            // recipient email 

            Destination: {
                ToAddresses: [to]
            }, 

            // email content 

            Message: {
                Subject: {
                    Data: subject 
                }, 
                Body: {
                    Text: {
                        Data: text 
                    }
                }
            }
        }) ; 

        // Send email through SES 

        const response = await sesClient.send(command) ; 

        console.log("email sent") ; 
        console.log(response) ; 
    }catch(error){
        console.log("SES error") ; 
        console.log(error) ; 
    }
}