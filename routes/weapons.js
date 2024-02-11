const express = require('express');
const router = express.Router();
//const express = require('express');
const weaponsController = require('../controllers/weapons');

router.get('/', weaponsController.getAll);
 //router.get('/', professionalController.getData);
router.get('/:id', weaponsController.getSingle);

router.post('/', weaponsController.createWeapon);

router.put('/:id', weaponsController.updateWeapon);

router.delete('/:id', weaponsController.deleteWeapon);



 
//export routes
module.exports = router;