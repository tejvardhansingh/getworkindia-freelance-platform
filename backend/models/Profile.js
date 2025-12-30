const mongoose = require("mongoose");


const ProfileSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  bio: { type: String },
  skills: [{ type: String }],
  hourlyRate: { type: Number },
  portfolio: [{ type: String }],
}, { timestamps: true });

module.exports = mongoose.model("Profile", ProfileSchema);
