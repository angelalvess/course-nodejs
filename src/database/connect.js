const mongoose = require('mongoose');

const connect = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@coursenode.ypw6pwn.mongodb.net/?retryWrites=true&w=majority&appName=database`
    );
    console.log('Database connected');
  } catch (error) {
    console.error('Error connecting to database: ', error);
  }
};

module.exports = connect;
