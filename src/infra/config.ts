import mongoose from "mongoose";

export const connectDB = async () => {
  mongoose.set("strictQuery", false);

  const mongoURI = `${process.env.DATABASE_URL}`;
  await mongoose.connect(mongoURI);

  console.log("DataBase is connected to MongoDB.");
};
