const swaggerAutogen = require('swagger-autogen')();
 
const doc = {
    info: {
        title: 'Clue API',
        description: 'Clue API'
    },
     //host: 'localhost:8080',
    host: 'localhost:8080',
    schemes: ['https']
};
 
const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];
 
// generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);