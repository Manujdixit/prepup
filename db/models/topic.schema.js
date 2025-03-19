import mongoose from "mongoose";

var topicSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    parentTopic: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Topic",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Topic", topicSchema);
