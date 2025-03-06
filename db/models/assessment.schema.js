import mongoose from "mongoose";

const assessmentSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    topics: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Topic",
      },
    ],
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    settings: {
      timeLimit: 10, // in minutes
      maxQuestions: {
        type: Number,
        default: 10,
      },
      initialDifficulty: {
        type: Number,
        min: 1,
        max: 10,
        default: 5,
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Assesment", assessmentSchema);
