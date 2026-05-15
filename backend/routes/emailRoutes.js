import express from "express";

import { sendBulkEmails} from "../controllers/emailController.js";
import { uploadCSV } from "../controllers/uploadController.js";
import { upload } from "../middlewares/uploadMiddleware.js";

const router = express.Router();

// JSON bulk email send route 

router.post("/send", sendBulkEmails);

// CSV upload route 

router.post("/upload-csv", upload.single("file"), uploadCSV) ; 

export default router;