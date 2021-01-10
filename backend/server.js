const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User');
require('./config/dbConnect')();
const app = express();

// Passing body data
app.use(express.json());

// Routes
// Users routes

// Register
app.post('/api/users/register', async (req, res) => {
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
app.post('/api/users/login', (req, res) => {
  res.send('Login route');
});

// Update user
app.put('/api/users/update', (req, res) => {
  res.send('Update route');
});

// Delete user
app.delete('/api/users/:id', (req, res) => {
  res.send('Delete route');
});

// Fetch users
app.get('/api/users', (req, res) => {
  res.send('Fetch route');
});

// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is up and runing ${PORT}`);
});