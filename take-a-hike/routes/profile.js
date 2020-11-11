const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/:userId', ctrl.profile.getSavedTrails);

router.put('/:userId', ctrl.profile.editProfile);

router.delete('/:userId/:trailId', ctrl.profile.deleteSavedTrail);
router.delete('/:userId', ctrl.profile.deleteProfile);

module.exports = router;