const express = require('express');
const userRoutes = express.Router();
const User = require('../models/User');

// Register
userRoutes.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.create({ name, email, password });
    console.log(user);
    res.send(user);
  } catch (error) {
    console.log(error);
  }
});

// Login
userRoutes.post('/login', (req, res) => {
  res.send('Login route');
});

// Update user
userRoutes.put('/update', (req, res) => {
  res.send('Update route');
});

// Delete user
userRoutes.delete('/:id', (req, res) => {
  res.send('Delete route');
});

// Fetch users
userRoutes.get('/', (req, res) => {
  res.send('Fetch route');
});

module.exports = userRoutes;