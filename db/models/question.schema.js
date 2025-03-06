import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  options: [
    {
      text: String,
      isCorrect: Boolean,
    },
  ],
  topics: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Topic",
    },
  ],
  difficulty: {
    type: Number,
    min: 1,
    max: 10,
    required: true,
  },
  metadata: {
    generationPrompt: String,
    llmModel: String,
    generatedAt: Date,
  },
});

module.exports = mongoose.model("Question", questionSchema);
