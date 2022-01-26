const express = require('express');
const router = express.Router();
const users = require('../controller/users');


router.post('/login', users.login);
router.post('/register', users.register);
router.put('/change-password', users.changePassword);
router.post('/detail', users.getDetail);

module.exports = router;
