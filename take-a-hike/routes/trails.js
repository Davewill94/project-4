const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/all', ctrl.trail.GetTrails);
router.get('/:index', ctrl.trail.GetTrail);

router.post('/bulk', ctrl.trail.bulkTrailPost);

module.exports = router;