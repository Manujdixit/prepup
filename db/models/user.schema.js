import mongoose from "mongoose";

var userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    clerkid: {
      type: string,
      required: true,
    },
    firstname: {
      type: string,
      required: true,
    },
    lastname: {
      type: string,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
