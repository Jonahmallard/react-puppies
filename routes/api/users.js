const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');

// POST /api/users
router.post('/', usersCtrl.create);
router.post('/login', usersCtrl.login);

// require the authorization middleware function
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// GET /api/users/check-token
router.get('/check-token', usersCtrl.checkToken);

module.exports = router;