const express = require('express');
const router = express.Router();

router.use('/', require('./swagger'));
router.use('/character', require('./characters'));
router.use('/weapons', require('./weapons'));


//export routes
module.exports = router;