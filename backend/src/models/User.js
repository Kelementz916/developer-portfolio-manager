// models/User.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: String,
  password: String, // Note: In a real application, you should hash passwords
  // Add any other fields you need for your users
});

module.exports = mongoose.model('User', UserSchema);