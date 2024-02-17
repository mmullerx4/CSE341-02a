const express = require('express');
const router = express.Router();

router.use('/', require('./swagger'));
router.use('/characters', require('./characters'));
router.use('/weapons', require('./weapons'));


//export routes
module.exports = router;