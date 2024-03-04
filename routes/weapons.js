const express = require('express');
const cors = require('cors')
const router = express.Router();
//const express = require('express');
const weaponsController = require('../controllers/weapons');
const validation = require('../middleware/validate');
const { requiresAuth } = require('express-openid-connect');

router.use(cors());

router.get('/', weaponsController.getAll);
 //router.get('/', professionalController.getData);
router.get('/:id', weaponsController.getSingle);

//router.post('/', weaponsController.createWeapon);
router.post('/', validation.saveWeapon, requiresAuth(), weaponsController.createWeapon);

//router.put('/:id', weaponsController.updateWeapon);
router.put('/:id', validation.saveWeapon, requiresAuth(), weaponsController.updateWeapon);

router.delete('/:id', requiresAuth(), weaponsController.deleteWeapon);



 
module.exports = router;