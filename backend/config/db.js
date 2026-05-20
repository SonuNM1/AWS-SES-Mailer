import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    console.log("mongo uri: ", process.env.MONGO_URI);
    
    const connection = await mongoose.connect(process.env.MONGO_URI);

    console.log(`MongoDB Connected: ${connection.connection.host}`);
  } catch (error) {
    console.error("MongoDB connection error: ", error);
    process.exit(1);
  }
};
