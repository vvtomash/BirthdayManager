const express = require('express');

const router = express.Router();

router.get('/api/firstMethod', (req, res) => {
    const result = { someResult: 123 };
    res.send(result);
});

router.get('/api/getUser', (req, res) => {
    const result = {
        id: 1,
        name: 'admin',
    };
    res.send(result);
});

module.exports = router;
