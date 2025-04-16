import User from '../models/userModel.js';
import { generateToken } from '../utils/jwt.js';
import bcrypt from 'bcryptjs';

// Register a new user
export const registerUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const user = await User.create({ email, password: hashedPassword });

        // Generate JWT token
        const token = generateToken(user._id);

        res.status(201).json({ user: { id: user._id, email: user.email }, token });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Login a user
export const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find the user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Check if password is correct
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Generate JWT token
        const token = generateToken(user._id);

        res.status(200).json({ user: { id: user._id, email: user.email }, token });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};