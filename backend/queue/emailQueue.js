import { Queue } from "bullmq";

// Creating queue named "emails"

export const emailQueue = new Queue("emails", {

    // Redis connection config 

  connection: {
    host: "127.0.0.1",  // local Redis server
    port: 6379, // default Redis port 
  },
});