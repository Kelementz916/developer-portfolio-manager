const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Routes
const projectRoutes = require('./routes/projectRoutes'); // Corrected path
app.use('/api/projects', projectRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
