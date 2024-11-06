import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import { connectDB } from "./config/db.js";
import authRoutes from './routes/auth.routes.js';
import claimRoutes from './routes/claim.routes.js';

dotenv.config();
const app = express();
const __dirname = path.resolve();

// Database connection
connectDB();

// CORS configuration
const corsOptions = {
  origin: process.env.FRONT_END_URL || 'http://localhost:5000', // replace with your frontend URL in production
};
app.use(cors(corsOptions));

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/claims', claimRoutes);

// Static file serving for production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/dist"));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
  });
}

// Error handling middleware
app.use((err, req, res, next) => {
  if (process.env.NODE_ENV !== 'production') {
    console.error(err);
  }
  res.status(500).json({ message: 'An error occurred' });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
