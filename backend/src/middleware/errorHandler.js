// middleware/errorHandler.js

const winston = require('winston');

const errorHandler = (err, req, res, next) => {
  // Log the error with Winston
  winston.error(err.message, { error: err });

  // Respond with an error message to the client
  res.status(500).json({ error: 'Internal Server Error' });
};

module.exports = errorHandler;
