//const SwaggerUI = require('swagger-ui');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;


//To pass OAuth settings to Swagger UI correctly, you can directly include the OAuth configuration when creating the Swagger UI instance

const swaggerOptions = {
    swaggerOptions: {
        OAuth: {
        clientId,
        clientSecret,
        realm: "https://cse341-02a.onrender.com",
        appName: "Clue",
        scopeSeparator: " ",
        scopes: "openid profile",
        additionalQueryStringParams: { test: "hello" },
        useBasicAuthenticationWithAccessCodeGrant: true,
        usePkceWithAuthorizationCodeGrant: true
    }
  }
};

const uiInstance = swaggerUi.setup(swaggerDocument, swaggerOptions);

module.exports = { uiInstance, swaggerDocument };