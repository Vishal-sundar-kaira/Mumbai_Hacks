// server.js

const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth.js");
const profileRoutes = require("./routes/profile.js");
const cors=require("cors")
const app = express();
app.use(express.json());
app.use(cors())
mongoose.connect("mongodb+srv://vishal123:Vishalmongouser@cluster0.q2rbdx0.mongodb.net/Personalized_learning", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/api/auth", authRoutes);
app.use("/api/profiles", profileRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
