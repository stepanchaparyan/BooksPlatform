const express = require('express');

const app = express();

// Routes
// Users routes

// Register
app.post('/api/users/register', (req, res) => {
  res.send('Register route');
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