// models/Project.js
const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title: String,
  description: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  // Add any other fields you need for your projects
});

module.exports = mongoose.model('Project', ProjectSchema);