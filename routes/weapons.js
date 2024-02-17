const express = require('express');
const router = express.Router();
//const express = require('express');
const weaponsController = require('../controllers/weapons');
const validation = require('../middleware/validate');

router.get('/', weaponsController.getAll);
 //router.get('/', professionalController.getData);
router.get('/:id', weaponsController.getSingle);

//router.post('/', weaponsController.createWeapon);
router.post('/', validation.saveWeapon, weaponsController.createWeapon)

//router.put('/:id', weaponsController.updateWeapon);
router.put('/:id', validation.saveWeapon, weaponsController.updateWeapon);

router.delete('/:id', weaponsController.deleteWeapon);



 
//export routes
module.exports = router;