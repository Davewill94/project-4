const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.put('/:userId', ctrl.profile.editProfile);

router.delete('/:userId', ctrl.profile.deleteProfile);

module.exports = router;