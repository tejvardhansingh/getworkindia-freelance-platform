const mongoose = require("mongoose");

const ProposalSchema = new mongoose.Schema(
  {
    // Freelancer who applied
    freelancer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // Job on which proposal is sent
    job: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Job",
      required: true,
    },

    // Proposal message
    coverLetter: {
      type: String,
      required: true,
    },

    // Bid amount
    bidAmount: {
      type: Number,
      required: true,
    },

    // Proposal status
    status: {
      type: String,
      enum: ["pending", "accepted", "rejected"],
      default: "pending",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Proposal", ProposalSchema);
