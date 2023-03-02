require('dotenv').config();
const mongoose = require('mongoose');
const url = process.env.MONGO_CONN_URL;

mongoose.set('strictQuery', true);

async function connectDB() {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Connected to MongoDB!!!');
  } catch (err) {
    console.error('Failed to connect to MongoDB:', err);
    throw err;
  }
}

module.exports = connectDB;
