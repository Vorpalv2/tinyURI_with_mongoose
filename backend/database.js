import mongoose from "mongoose";
import { MONGO_URI } from "./constants.js";

async function connectToDB() {
  try {
    await mongoose.connect("mongodb://localhost:27017/" + MONGO_URI);
  } catch (error) {
    throw new Error("something went wrong while trying to connect");
  }
}

export { connectToDB };
