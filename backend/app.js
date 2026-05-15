
import dotenv from "dotenv" ; 
dotenv.config() ; 

import express from "express";
import { emailQueue } from "./queue/emailQueue.js";
import emailRoutes from "./routes/emailRoutes.js" ; 
import { connectDB } from "./config/db.js";

const app = express();
const PORT = process.env.PORT || 4000 ; 

app.use(express.json());

// connect database 

connectDB() ; 

// register routes
 
app.use("/", emailRoutes) ; 

// app running on PORT 

app.listen(PORT, () => {
  console.log(`Server running on: http://localhost:${PORT}`);
});