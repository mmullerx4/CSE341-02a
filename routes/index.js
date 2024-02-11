const express = require('express');
const router = express.Router();


router.use('/clue', require('./characters'));
router.use('/clue', require('./weapons'));
router.use('/', require('./swagger'));

//export routes
module.exports = router;