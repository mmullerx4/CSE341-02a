const express = require('express');
const router = express.Router();
//const express = require('express');
const charactersController = require('../controllers/characters');
const validation = require('../middleware/validate');

router.get('/', charactersController.getAll);
 //router.get('/', professionalController.getData);
router.get('/:id', charactersController.getSingle);

router.post('/', charactersController.createCharacter);
router.post('/', validation.saveCharacter, charactersController.createCharacter);

router.put('/:id', charactersController.updateCharacter);
router.put('/:id', validation.saveCharacter, charactersController.updateCharacter);

router.delete('/:id', charactersController.deleteCharacter);



 
//export routes
module.exports = router;