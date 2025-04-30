import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'; // 🆕 Import CORS
import blogRoutes from './routes/blogRoutes.js';
dotenv.config();

import connectDB from './config/db.js';
import { PORT } from './config/env.js';

const app = express();

// 🛡️ Enable CORS middleware
app.use(cors());

// 📦 JSON parsing middleware
app.use(express.json());

// 🔍 Health check route
app.get('/', (req, res) => {
  res.status(200).json({ status: 'ok', message: '🩺 Server is healthy!' });
});
app.use('/api/blogs', blogRoutes);
// 🔌 Connect to DB
connectDB();

// 🚀 Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
