const express = require('express');
const morgan = require('morgan');
const errorHandler = require('./middleware/errorHandler');
const routes = require('./routes/index');

const app = express();

// Middleware
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/api', routes);

// Error handling middleware
app.use(errorHandler);

module.exports = app;