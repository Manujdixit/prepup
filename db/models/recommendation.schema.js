import mongoose from "mongoose";

const recommendationSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  externalUrl: String,

  question: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Question",
  },
});

module.exports = mongoose.model("Recommendation", recommendationSchema);
