const express = require('express');
const db = require('./db');

const router = express.Router();

router.post('/user/register', async (req, res, next) => {
  const { email, pass: password, birthday } = req.body.user;
  if (!email || !password) {
    return next(new Error('Wrong arguments'));
  }
  const exists = await db.User.findOne({ email }, { email: 1, _id: 0 }).exec();
  if (exists) {
    return next(new Error('User with this email already exists'));
  }
  try {
    const { _id } = await db.User.create({ email, password, birthday });
    return res.send({ data: { _id, email } });
  } catch (err) {
    return next(err);
  }
});

router.get('/getBirthdays', (req, res, next) => {
  db.User.find()
    .allBirthdays()
    .exec((err, users) => {
      if (err) {
        next(err);
      }
      res.send(users);
    });
});

router.post('/user/login', (req, res) => {
  const result = {
    id: 1,
    name: 'admin',
  };
  res.send(result);
});

router.use((err, req, res, next) => {
  console.log(`API error: ${err.toString()}`);
  if (err.stack) {
    console.log(err.stack);
  }
  res.status(500);
  res.send({
    errors: [err.toString()],
  });
});

module.exports = router;
