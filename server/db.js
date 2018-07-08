/* eslint-disable no-console */
const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: 1,
  },
  name: {
    type: String,
  },
  pass: {
    type: String,
    required: true,
  },
  birthday: {
    type: Date,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
});

const Models = {
  User: mongoose.model('User', userSchema),
  initialized: true,
};

mongoose.connect('mongodb://127.0.0.1:27017/BM', { useNewUrlParser: true });
if (process.env.ENV_NODE !== 'production') {
  mongoose.set('debug', true);
}

const db = mongoose.connection;

db.on('error', (err) => {
  console.log(err);
  console.log('Database connection error.');
});

db.once('open', () => {
  console.log('The database has connected.');
});

module.exports = Models;
