const express = require('express');
const router = express.Router();


router.use('/character', require('./characters'));
router.use('/weapons', require('./weapons'));
router.use('/', require('./swagger'));

//export routes
module.exports = router;