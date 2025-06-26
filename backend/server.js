const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://mongo:27017/employees');

const UserSchema = new mongoose.Schema({
  username: String,
  password: String
});
const User = mongoose.model('User', UserSchema);
// Add this log message
console.log("=== Version 2 ===");

// Register API
app.post('/register', async (req, res) => {
  const hashed = await bcrypt.hash(req.body.password, 10);
  const user = new User({ username: req.body.username, password: hashed });
  await user.save();
  res.send({ message: 'User registered' });
});

// Login API
app.post('/login', async (req, res) => {
  const user = await User.findOne({ username: req.body.username });
  if (!user) return res.status(401).send('User not found');
  const valid = await bcrypt.compare(req.body.password, user.password);
  valid ? res.send('Login successful') : res.status(401).send('Invalid password');
});

app.listen(5000, () => console.log('Backend running on 5000'));
