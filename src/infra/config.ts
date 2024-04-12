import { connect } from "mongoose";

export const connectDB = async () => {
  const mongoURI = `${process.env.DATABASE_URL}`;

  try {
    await connect(mongoURI);
    console.log("Database is connected to MongoDB.");
  } catch (error) {
    console.log(`Erro ao conectar com o banco: ${error}`);
  }
};
