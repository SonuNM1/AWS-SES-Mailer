// Import fs module
import fs from "fs";
import csv from "csv-parser";
import { emailQueue } from "../queue/emailQueue.js";


export const uploadCSV = async (
  req,
  res
) => {

  try {

    // Array for CSV rows
    const results = [];

    // Read uploaded CSV file
    fs.createReadStream(req.file.path)

      // Parse CSV
      .pipe(csv())

      // Push each row
      .on("data", (data) => {

        results.push(data);
      })

      // Finished parsing
      .on("end", async () => {

        // Loop through rows
        for (const row of results) {

          // Create queue job
          await emailQueue.add(
            "send-email",
            {
              to: row.email,

              subject: row.subject,
            }
          );
        }

        // Success response
        res.json({
          success: true,
          queued: results.length,
        });
      });

  } catch (error) {

    console.error("CSV ERROR");

    console.error(error);

    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};