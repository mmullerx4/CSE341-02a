const express = require('express');
const router = express.Router();
//const express = require('express');
const charactersController = require('../controllers/characters');
const validation = require('../middleware/validate');
const { requiresAuth } = require('express-openid-connect');

router.get('/', charactersController.getAll);
 //router.get('/', professionalController.getData);
router.get('/:id', charactersController.getSingle);


//router.post('/', charactersController.createCharacter);
router.post('/', validation.saveCharacter, requiresAuth(), charactersController.createCharacter);

//router.put('/:id', charactersController.updateCharacter);
router.put('/:id', validation.saveCharacter, requiresAuth(), charactersController.updateCharacter);

router.delete('/:id', requiresAuth(), charactersController.deleteCharacter);



 
//export routes
module.exports = router;