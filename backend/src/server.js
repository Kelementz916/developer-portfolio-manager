require('dotenv').config({ path: './mongo.env' });
const express = require('express');
const mongoose = require('mongoose');
const winston = require('winston');
const cors = require('cors'); // Require cors
const projectRoutes = require('./routes/projectRoutes'); // Import project routes
const userRoutes = require('./routes/userRoutes'); // Import user routes

// Initialize Winston logger
const logger = winston.createLogger({
  transports: [
    new winston.transports.Console(), // Log to
    new winston.transports.File({ filename: 'error.log', level: 'error' }) // Log errors to a file
  ],
  format: winston.format.combine(
    winston.format.timestamp(), // Add timestamp to logs
    winston.format.json() // Log format as JSON
  )
});

const app = express();

// Middleware to log requests
app.use((req, res, next) => {
  logger.info(`${req.method} ${req.url}`);
  next();
});

// Middleware
app.use(cors()); // Use cors middleware
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
    .then(() => logger.info('Connected to MongoDB Atlas')) // Log successful connection
    .catch((error) => {
      logger.error('Error connecting to MongoDB Atlas:', error); // Log error connecting to MongoDB
      process.exit(1); // Exit process with failure
    });

// Mount project routes
app.use('/api/projects', projectRoutes);
app.use('/api/users', userRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => logger.info(`Server running on port ${PORT}`)); // Log server startup