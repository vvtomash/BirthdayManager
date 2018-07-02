/* eslint-disable no-console */
const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  pwd: String,
});

userSchema.query.byName = function (name) {
  return this.where({ name: new RegExp(name, 'i') });
};

const Models = {
  User: mongoose.model('User', userSchema),
  initialized: true,
};

mongoose.connect('mongodb://127.0.0.1/BM');
if (process.env.ENV_NODE !== 'production') {
  mongoose.set('debug', true);
}

const db = mongoose.connection;

db.on('error', () => {
  console.log('Database connection error.');
});

db.once('open', () => {
  console.log('The database has connected.');
});

module.exports = Models;
