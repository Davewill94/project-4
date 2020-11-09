const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');



router.post('/createUser', ctrl.auth.createUser);

module.exports = router;