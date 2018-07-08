const express = require('express');
const db = require('./db');
const crypto = require('crypto');

const SALT_PASS = 'NUs6x8nx39hdnxaJDu';

const router = express.Router();

function encryptPass(password) {
  return crypto.createHash('md5').update(password + SALT_PASS).digest('hex');
}

router.post('/user/register', async (req, res, next) => {
  const { email, pass, birthday } = req.body.user;
  if (!email || !pass) {
    return next(new Error('Wrong arguments'));
  }
  const exists = await db.User.findOne({ email }, { email: 1, _id: 0 }).exec();
  if (exists) {
    return next(new Error('User with this email already exists'));
  }
  try {
    const { _id } = await db.User.create({ email, pass: encryptPass(pass), birthday });
    return res.send({ data: { _id, email } });
  } catch (err) {
    return next(err);
  }
});

router.post('/user/login', (req, res) => {
  const result = {
    id: 1,
    name: 'admin',
  };
  res.send(result);
});

router.use((err, req, res, next) => {
  if (err) {
    console.log(`API error: ${err.toString()}`);
    if (err.stack) {
      console.log(err.stack);
    }
    res.status(500);
    res.send({
      errors: [err.toString()],
    });
  }
});

module.exports = router;
