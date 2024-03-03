//const SwaggerUI = require('swagger-ui');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');


//To pass OAuth settings to Swagger UI correctly, you can directly include the OAuth configuration when creating the Swagger UI instance

const swaggerOptions = {
    swaggerOptions: {
        OAuth: {
        clientId: "LDz16qaGJEjNvtGd1aMl7M6xfMg8TdOP",
        clientSecret: "B-0YddiiEbAaAhKqOPuRs8bh44xFJAByM_ORRqTkfEZmmk-3SHO40Ek82ZjY_MsR",
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