const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');
const logger = require('./utils/logger');

dotenv.config();

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    logger.info('Connected to MongoDB');
    app.listen(PORT, () => {
        logger.info(`Server is running on http://localhost:${PORT}`);
    });
})
.catch(err => {
    logger.error('Error connecting to MongoDB:', err);
    process.exit(1);
});