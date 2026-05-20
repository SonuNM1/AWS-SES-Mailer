import { SendEmailCommand } from "@aws-sdk/client-ses";
import { sesClient } from "./sesClient.js";

export const sendEmail = async ({
  to,
  subject,
  text,
}) => {
  try {

    const command = new SendEmailCommand({

      // Sender email
      Source: "dev.relevantsearchmedia@gmail.com",

      // Recipient email
      Destination: {
        ToAddresses: [to],
      },

      // Email content
      Message: {
        Subject: {
          Data: subject,
        },

        Body: {
          Text: {
            Data: text,
          },
        },
      },
    });

    // Send email through SES
    const response =
      await sesClient.send(command);

    console.log("Email sent");
    console.log(response);

    // Return AWS response
    return response;

  } catch (error) {

    console.error("SES Error");
    console.error(error);

    throw error;
  }
};