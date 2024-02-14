const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  // Add more fields as needed
});

module.exports = mongoose.model('Project', projectSchema);
