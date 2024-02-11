const express = require('express');
const router = express.Router();
//const express = require('express');
const charactersController = require('../controllers/characters');

router.get('/', charactersController.getAll);
 //router.get('/', professionalController.getData);
router.get('/:id', charactersController.getSingle);

router.post('/', charactersController.createCharacter);

router.put('/:id', charactersController.updateCharacter);

router.delete('/:id', charactersController.deleteCharacter);

//test

 
//export routes
module.exports = router;