// routes/auth.js

const express = require("express");
const jwt = require("jsonwebtoken");
const Student = require("../models/Student");
const router = express.Router();

const generateToken = (id) => {
  return jwt.sign({ id }, "your_jwt_secret_key", { expiresIn: "30d" });
};

// Signup Route
router.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    let student = await Student.findOne({ email });
    if (student) return res.status(400).json({ message: "Email already exists" });

    student = new Student({ name, email, password });
    await student.save();

    const token = generateToken(student._id);
    res.status(201).json({ token, studentId: student._id });
  } catch (error) {
    res.status(500).json({ message: "Signup failed" });
  }
});

// Login Route
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const student = await Student.findOne({ email });
    if (!student || !(await student.matchPassword(password))) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = generateToken(student._id);
    res.status(200).json({ token, studentId: student._id });
  } catch (error) {
    res.status(500).json({ message: "Login failed" });
  }
});

module.exports = router;
