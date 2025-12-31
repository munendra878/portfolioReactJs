const express = require('express');
const cors = require('cors');
const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Load static data
const projects = require('./data/projects.json');
const certifications = require('./data/certifications.json');

// API Routes
app.get('/api/projects', (req, res) => res.json(projects));
app.get('/api/certifications', (req, res) => res.json(certifications));

// OpenAI Chat Route
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});


app.post('/api/chat', async (req, res) => {
  try {
    const { messages } = req.body;
    const completion = await openai.createChatCompletion({
      model: "gpt-4",
      messages
    });
    res.json({ reply: completion.data.choices[0].message.content });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "AI response failed" });
  }
});

app.listen(PORT, () => console.log(`Backend running at http://localhost:${PORT}`));
