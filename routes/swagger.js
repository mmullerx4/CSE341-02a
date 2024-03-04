//connect to express, swagger-ui-express, swagger.json
const router = require('express').Router();
const swaggerUi = require('swagger-ui-express');
const { swaggerDocument } = require('../swagger-ui-config'); //add uiInstance  in front of swaggerDocument if necessary
//const swaggerDocument = require('../swagger.json');

router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));

module.exports = router;