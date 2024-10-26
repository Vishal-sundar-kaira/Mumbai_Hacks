// routes/profile.js
const express = require("express");
const recommendLearningPathway = require("../utils/learningPathway");
const router = express.Router();
const Profile = require("../models/Profile");

const protect=require("../middleware/authMiddleware")
router.post("/submit-questionnaire", async (req, res) => {
  try {
    const { studentId, learningStyle, subjectStrengths, interests, diagnosticScore } = req.body;

    const profile = new Profile({
      studentId,
      learningStyle,
      subjectStrengths,
      interests,
      diagnosticScore,
    });

    const recommendations = await recommendLearningPathway(profile);
    console.log(recommendations)
    profile.learningPathway = recommendations;

    await profile.save();
    res.status(201).json({ message: "Profile created successfully with pathway." });
  } catch (error) {
    res.status(500).json({ error: "Error generating pathway" });
  }
});


// Route to get the student profile
router.get("/get-profile", protect, async (req, res) => {
  try {
    if (!req.student) {
      return res.status(404).json({ message: "Student not found" });
    }

    console.log("Student:", req.student);
    const id = req.student._id;
    console.log("ID:", id);

    // Use an object for the query
    const profile = await Profile.findOne({ studentId: id });

    if (!profile) {
      return res.status(404).json({ message: "Profile not found" });
    }

    // Send the profile data as JSON
    res.status(200).json(profile);
  } catch (error) {
    console.error("Error fetching profile:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Route to get a response based on input text
router.post("/get-response", async (req, res) => {
  try {
      const { question } = req.body;  // Get input text from request body
      console.log(question,"get response me")
      // Get recommendations using your utility function
      const recommendations = await recommendLearningPathway(question);
      console.log(recommendations);
      
      // Send back the generated recommendations
      res.status(200).json({ response: recommendations });
  } catch (error) {
      console.error("Error processing input text:", error);
      res.status(500).json({ error: "Error generating response" });
  }
});




module.exports = router;