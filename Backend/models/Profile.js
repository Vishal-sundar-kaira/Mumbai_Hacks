// models/Profile.js

const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: "Student", required: true },
  learningStyle: { type: String },
  subjectStrengths: { type: String },
  interests: { type: String },
  diagnosticScore: { type: Number, default: 0 },
  learningPathway: { type: Array },  // Store AI recommendations
});

module.exports = mongoose.model("Profile", profileSchema);
