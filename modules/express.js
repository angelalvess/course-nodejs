const express = require('express');
const Usermodel = require('../src/models/userModel');

// Init express
const app = express();
app.use(express.json());

// Middleware

app.use((req, res, next) => {
  console.log(`Request: ${req.method}`);
  console.log(`Content type : ${req.headers['content-type']}`);
  console.log(`Date: ${new Date()}`);

  next();
});

// Create get users route
app.get('/users', async (req, res) => {
  try {
    const users = await Usermodel.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Search for a user by id
app.get('/users/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const user = await Usermodel.findById(id);

    return res.status(200).json(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Update a user
app.put('/users/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const user = await Usermodel.findByIdAndUpdate(id, req.body, { new: true });

    return res.status(200).json(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Delete a user
app.delete('/users/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const user = await Usermodel.findByIdAndDelete(id);

    return res.status(200).json(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Create a new user
app.post('/users', async (req, res) => {
  try {
    const user = await Usermodel.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Listen to port
const port = 5000;

app.listen(port, () =>
  console.log(`Server running with EXPRESS on port ${port}`)
);
