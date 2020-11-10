const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/all', ctrl.trail.GetTrails);
router.get('/:index', ctrl.trail.GetTrail)

module.exports = router;