import dns from "dns";
dns.setServers(["8.8.8.8", "1.1.1.1"]);

import dotenv from "dotenv" ; 
dotenv.config() ; 

import express from "express";
import { emailQueue } from "./queue/emailQueue.js";
import emailRoutes from "./routes/emailRoutes.js" ; 
import campaignRoutes from "./routes/campaignRoutes.js" ; 
import emailLogRoutes from "./routes/emailLogRoutes.js" ; 
import analyticsRoutes from "./routes/analyticsRoutes.js" ; 
import { connectDB } from "./config/db.js";

const app = express();
const PORT = process.env.PORT || 4000 ; 

app.use(express.json());

// register routes
 
app.use("/", emailRoutes) ; 
app.use("/", campaignRoutes) ; 
app.use("/", emailLogRoutes) ; 
app.use("/", analyticsRoutes) ; 

// only start server after app connects to the database 

const startServer = async () => {
  try { 

    await connectDB();

    app.listen(PORT, () => {
      console.log(`Server running on: http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

startServer();

