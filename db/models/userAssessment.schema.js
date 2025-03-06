import mongoose from "mongoose";

const userAssessmentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  assessment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Assessment",
    required: true,
  },
  status: {
    type: String,
    enum: ["in-progress", "completed", "abandoned"],
    default: "in-progress",
  },
  startedAt: {
    type: Date,
    default: Date.now,
  },
  completedAt: Date,
  score: {
    type: Number,
    min: 0,
    max: 100,
  },
  questions: [
    {
      question: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Question",
      },
      userAnswer: Number,
      isCorrect: Boolean,
      timeSpent: Number,
      difficulty: Number,
      //   behavioralData: {
      //     focusEvents: [
      //       {
      //         timestamp: Date,
      //         inFocus: Boolean,
      //         duration: Number, // in seconds
      //       },
      //     ],
      //     hesitations: [
      //       {
      //         timestamp: Date,
      //         fromOption: Number,
      //         toOption: Number,
      //       },
      //     ],
      //   },
    },
  ],
  adaptivePath: [
    {
      questionNumber: Number,
      difficulty: Number,
      performanceMetric: Number,
      nextDifficultyReason: String,
    },
  ],
  feedback: {
    strengths: [String],
    weaknesses: [String],
    recommendedTopics: [
      {
        topic: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Topic",
        },
        reason: String,
      },
    ],
  },
});

module.exports = mongoose.model("UserAssessment", userAssessmentSchema);
