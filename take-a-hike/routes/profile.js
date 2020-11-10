const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/all', ctrl.profile.getAllUsers)

module.exports = router;