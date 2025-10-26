require('dotenv').config();
const express = require("express");
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Simple test endpoint
app.get("/", (req, res) => {
  res.send("Weather Backend Running!");
});

// Live weather forwarding endpoint (city as query param)
app.get("/api/weather", async (req, res) => {
  const city = req.query.city || "Delhi";
  const key = process.env.OPENWEATHER_API_KEY;
  try {
    const weatherRes = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},IN&units=metric&appid=${key}`
    );
    const data = await weatherRes.json();
    res.json(data);
  } catch (e) {
    res.status(500).json({error: "Weather fetch failed"});
  }
});

// You can add more routes here—feedback, saved data, etc.

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
