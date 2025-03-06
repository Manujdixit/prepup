import mongoose from "mongoose";

const petSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  //   type: {
  //     type: String,
  //     enum: ["dragon", "cat", "dog", "owl", "robot"],
  //     default: "owl",
  //   },
  level: {
    type: Number,
    default: 1,
    min: 1,
    max: 100,
  },
  //   experience: {
  //     type: Number,
  //     default: 0,
  //   },
  //   stats: {
  //     intelligence: {
  //       type: Number,
  //       default: 10,
  //       min: 1,
  //       max: 100,
  //     },
  //     happiness: {
  //       type: Number,
  //       default: 50,
  //       min: 1,
  //       max: 100,
  //     },
  //     energy: {
  //       type: Number,
  //       default: 100,
  //       min: 1,
  //       max: 100,
  //     },
  //   },
  //   accessories: [
  //     {
  //       type: {
  //         type: String,
  //         enum: ["hat", "glasses", "clothing", "background"],
  //       },
  //       item: String,
  //       equipped: {
  //         type: Boolean,
  //         default: false,
  //       },
  //       acquiredAt: {
  //         type: Date,
  //         default: Date.now,
  //       },
  //     },
  //   ],
  //   abilities: [
  //     {
  //       name: String,
  //       description: String,
  //       type: {
  //         type: String,
  //         enum: [
  //           "hint",
  //           "timeExtension",
  //           "difficultyReduction",
  //           "experienceBoost",
  //         ],
  //       },
  //       cooldown: {
  //         type: Number,
  //         default: 24, // hours
  //       },
  //       lastUsed: Date,
  //     },
  //   ],
  //   evolutionStage: {
  //     type: Number,
  //     default: 1,
  //     min: 1,
  //     max: 5,
  //   },
  //   evolutionHistory: [
  //     {
  //       stage: Number,
  //       evolvedAt: Date,
  //       reason: String,
  //     },
  //   ],
});

module.exports = mongoose.model("Pet", petSchema);
