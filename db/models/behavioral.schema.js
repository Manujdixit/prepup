import mongoose from "mongoose";

const behavioralSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  assessmentInstance: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "UserAssessment",
  },
  sessionStart: {
    type: Date,
    default: Date.now,
  },
  sessionEnd: Date,
  attentionMetrics: {
    overallFocusScore: {
      type: Number,
      min: 0,
      max: 100,
    },
    distractionEvents: [
      {
        timestamp: Date,
        duration: Number, // in seconds
        eventType: {
          type: String,
          enum: ["away", "distracted", "multitasking"],
        },
      },
    ],
    faceAnalysis: [
      {
        timestamp: Date,
        emotion: {
          type: String,
          enum: [
            "neutral",
            "happy",
            "sad",
            "confused",
            "frustrated",
            "focused",
          ],
        },
        confidence: Number,
      },
    ],
  },
  cognitiveLoadEstimate: {
    type: Number,
    min: 1,
    max: 10,
  },
  stressLevelEstimate: {
    type: Number,
    min: 1,
    max: 10,
  },
});

module.exports = mongoose.model("Behavioral", behavioralSchema);
