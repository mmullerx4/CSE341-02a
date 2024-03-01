//connect to express, swagger-ui-express, swagger.json
const router = require('express').Router();
const { ui, swaggerDocument } = require('../swagger-ui-config');
//const swaggerDocument = require('../swagger.json');

router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument, { customJs: '/path/to/swagger-ui-config.js' }));

module.exports = router;