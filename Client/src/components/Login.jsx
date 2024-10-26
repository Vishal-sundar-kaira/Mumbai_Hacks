import React, { useState } from "react";
import axios from "axios";

const Login = ({ setUserRole }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset error state before making a request
    try {
      const response = await axios.post("http://localhost:3000/api/auth/login", formData);
      localStorage.setItem("token", response.data.token);
      alert("Login successful!");
    } catch (error) {
      console.error("Login error:", error);
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "10vh auto",
        padding: "30px",
        borderRadius: "10px",
        backgroundColor: "#f5f5f5",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        height:"100vh"
      }}
    >
      <h1 style={{color:"rgb(74, 144, 226)"}}>Llama Learn</h1>
      <h2 style={{ color: "#333", fontSize: "24px", marginBottom: "20px" }}>Login</h2>
      
      {error && (
        <div style={{ color: "#ff4d4d", fontSize: "14px", marginBottom: "15px" }}>
          {error}
        </div>
      )}
      
      <form style={{ display: "flex", flexDirection: "column", gap: "12px" }} onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
          style={{
            width: "100%",
            padding: "12px",
            border: "1px solid #ddd",
            borderRadius: "8px",
            fontSize: "16px",
          }}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
          style={{
            width: "100%",
            padding: "12px",
            border: "1px solid #ddd",
            borderRadius: "8px",
            fontSize: "16px",
          }}
        />
      </form>

      <div style={{ display: "flex", flexDirection: "row", gap: "20px", marginTop: "15px" ,justifyContent:"center"}}>
        <button
          onClick={() => setUserRole('student')}
          style={{
            backgroundColor: "#4A90E2",
            color: "#ffffff",
            border: "none",
            padding: "12px 20px",
            cursor: "pointer",
            borderRadius: "25px",
            fontSize: "16px",
            fontWeight: "bold",
            transition: "background-color 0.3s ease, transform 0.2s ease",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#357ABD")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#4A90E2")}
        >
          Student
        </button>

        <button
          onClick={() => setUserRole('teacher')}
          style={{
            backgroundColor: "#4A90E2",
            color: "#ffffff",
            border: "none",
            padding: "12px 20px",
            cursor: "pointer",
            borderRadius: "25px",
            fontSize: "16px",
            fontWeight: "bold",
            transition: "background-color 0.3s ease, transform 0.2s ease",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#357ABD")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#4A90E2")}
        >
          Teacher
        </button>
      </div>

      <div style={{ marginTop: "20px" }}>
        <p>
          Don't have an account? <a href="/signup" style={{ color: "#4A90E2", textDecoration: "none" }}>Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
