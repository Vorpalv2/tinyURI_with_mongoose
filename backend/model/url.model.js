import mongoose from "mongoose";

const urlSchema = new mongoose.Schema(
  {
    tinyurl: {
      type: String,
      required: true,
      unique: true,
    },
    redirecturl: {
      type: String,
      required: true,
      unique: true,
    },
    timestamp: [
      {
        time: {
          type: String,
        },
      },
    ],
    generatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
  },
  { timestamps: true }
);

const url = mongoose.model("url", urlSchema);

export { url };
