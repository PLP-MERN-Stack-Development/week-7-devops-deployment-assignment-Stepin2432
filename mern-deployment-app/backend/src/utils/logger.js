const winston = require('winston');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
    ),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' })
    ]
});

// Middleware for logging requests
const requestLogger = (req, res, next) => {
    logger.info(`Request: ${req.method} ${req.url}`);
    next();
};

// Middleware for logging errors
const errorLogger = (err, req, res, next) => {
    logger.error(`Error: ${err.message}`);
    next(err);
};

module.exports = {
    logger,
    requestLogger,
    errorLogger
};