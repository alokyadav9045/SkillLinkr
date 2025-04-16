import express from 'express';
import { getUserProfile, updateUserProfile } from '../controllers/userController.js';
import { verifyToken } from '../middleware/authMiddleware.js'; // Use only the named export

const router = express.Router();

// Route to get user profile
router.get('/profile', verifyToken, getUserProfile);

// Route to update user profile
router.put('/profile', verifyToken, updateUserProfile);

export default router;