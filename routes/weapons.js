const express = require('express');
const router = express.Router();
//const express = require('express');
const weaponsController = require('../controllers/weapons');

router.get('/', weaponsController.getAll);
 //router.get('/', professionalController.getData);
router.get('/:id', weaponsController.getSingle);

router.post('/', weaponsController.createCharacter);

router.put('/:id', weaponsController.updateCharacter);

router.delete('/:id', weaponsController.deleteCharacter);



 
//export routes
module.exports = router;