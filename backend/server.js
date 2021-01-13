const express = require('express');
const dotenv = require('dotenv');
const error = require('./middlewares/errorMiddlewarehandler');
const usersRouter = require('./routes/usersRoute');
const bookRouter = require('./routes/bookRoute');

dotenv.config();
// connect MongoDB
require('./config/dbConnect')();

const app = express();

// Passing body data
app.use(express.json());

// Routes
// Users
app.use('/api/users', usersRouter);

// Books
app.use('/api/books', bookRouter);

// error middleware
app.use(error.errorMiddlewareHandler);

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is up and runing ${PORT}`);
});