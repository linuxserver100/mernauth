const express = require('express');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const router = express.Router();
// Register a user
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body; try {
    const userExists = await User.findOne({ email });
 if (userExists) {
      return res.status(400).json({
      message: 'User already exists' });
    }
    const user = new User({ name, email, password }); await user.save();
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' }); res.json({ token });
  } catch (error) {
    res.status(500).send('Server error');
  }
});
// Login a user
router.post('/login', async (req, res) => {
  const { email, password } = req.body; try {
    const user = await User.findOne({ email });
if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    const isMatch = await user.matchPassword(password);
if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' }); res.json({ token });
  } catch (error) {
    res.status(500).send('Server error');
  }
});
module.exports = router;
