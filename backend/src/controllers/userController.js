// controllers/userController.js
const User = require('../models/User');

exports.signup = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = new User({ username, password });
    const newUser = await user.save();

    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user || password !== user.password) {
      throw new Error('Invalid username or password');
    }

    res.json({ message: 'Login successful' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getUser = async (req, res) => {
  try {
    const user = await User.findOne({username: req.params.userId});
    if (user == null) {
      return res.status(404).json({ message: 'Cannot find user. The database might be empty.' });
    }
    res.json(user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};