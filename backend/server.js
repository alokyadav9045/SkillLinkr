import express from 'express';
import mongoose from 'mongoose';
import authRoutes from './routes/authRoutes.js'; // Include the .js extension
import userRoutes from './routes/userRoutes.js'; // Include the .js extension
import { connectDB } from './config/db.js'; // Ensure .js extension is included here as well
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Database connection
connectDB();

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});