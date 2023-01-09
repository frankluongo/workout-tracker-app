import mongoose from "mongoose";

const DB_URI = process.env.DATABASE_URI || '';

if (!DB_URI) throw new Error('Database uri is not in env file');

export async function dbConnect() {
  await mongoose.connect(DB_URI);
}