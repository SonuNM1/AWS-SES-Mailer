import { Worker } from "bullmq";
import { sendEmail } from "../services/sendEmail.js";

// Creating worker that listens to "emails" queue

const worker = new Worker(
  "emails", // Queue name

  // Job processor function

  async (job) => {
    
    console.log("Processing:", job.data);

    console.log(job.data) ; 

    // send real email using SES 

    await sendEmail({
      to: job.data.to, 
      subject: job.data.subject, 
      text: "Hello from AWS SES + BullMQ"
    })
  },

  //   Redis connection

  {
    connection: {
      host: "127.0.0.1",
      port: 6379,
    },

    // rate limiting 

    limiter: {
      max: 5,  // max jobs 
      duration: 1000, // per duration (ms)
    }

  },
);

// Worker failure logging 

worker.on("failed", (job, err) => {
  console.error("Worker failed") ; 
  console.error(err) ; 
})
