const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema(
  {
    // Job kis client ne post ki
    client: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // Job title
    title: {
      type: String,
      required: true,
      trim: true,
    },

    // Job description
    description: {
      type: String,
      required: true,
    },

    // Job budget
    budget: {
      type: Number,
      required: true,
    },

    // Job status
    status: {
      type: String,
      enum: ["open", "in-progress", "completed"],
      default: "open",
    },

    // Job ke proposals (multiple freelancers)
    proposals: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Proposal",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Job", JobSchema);
