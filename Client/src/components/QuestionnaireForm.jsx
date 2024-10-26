// QuestionnaireForm.js

import React, { useState } from "react";
import axios from "axios";

const QuestionnaireForm = () => {
  const [formData, setFormData] = useState({
    studentId: "",
    learningStyle: "",
    subjectStrengths: "",
    interests: "",
    diagnosticScore: 0,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/api/profiles/submit-questionnaire", formData);
      alert("Profile created successfully!");
    } catch (error) {
      console.error("Error submitting questionnaire", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="studentId" placeholder="Student ID" onChange={handleChange} />
      <input type="text" name="learningStyle" placeholder="Learning Style" onChange={handleChange} />
      <input type="text" name="subjectStrengths" placeholder="Subject Strengths" onChange={handleChange} />
      <input type="text" name="interests" placeholder="Interests" onChange={handleChange} />
      <input type="number" name="diagnosticScore" placeholder="Diagnostic Score" onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default QuestionnaireForm;
