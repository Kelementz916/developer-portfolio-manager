require('dotenv').config({ path: './mongo.env' });
const express = require('express');
const mongoose = require('mongoose');
const winston = require('winston');
const cors = require('cors'); // Require cors
const path = require('path');
const projectRoutes = require('./routes/projectRoutes'); // Import project routes
const userRoutes = require('./routes/userRoutes'); // Import user routes
const userController = require('./controllers/userController'); // Import user controller

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

app.use(express.static(path.join(__dirname, '../frontend/dist')));

// Connect to MongoDB
const MONGODB_URI= //insert uri;

mongoose.connect(MONGODB_URI)
    .then(() => logger.info('Connected to MongoDB Atlas')) // Log successful connection
    .catch((error) => {
      logger.error('Error connecting to MongoDB Atlas:', error); // Log error connecting to MongoDB
      process.exit(1); // Exit process with failure
    });

// Mount project routes
app.use('/projects', projectRoutes);
app.use('/user', userRoutes);
app.use('/signup', userRoutes);
app.post('/login', userController.login);


// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => logger.info(`Server running on port ${PORT}`)); // Log server startup