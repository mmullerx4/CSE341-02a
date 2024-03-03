const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');const SwaggerUI = require('swagger-ui');


//To pass OAuth settings to Swagger UI correctly, you can directly include the OAuth configuration when creating the Swagger UI instance
const ui = SwaggerUI({
    spec: swaggerDocument, //tells Swagger UI where to find the specification to display.  is linking the Swagger UI instance to your Swagger specification, ensuring that the UI displays the correct API documentation based on the provided specification.
    //validatorURL: null,
    OAuth: {
        clientId: "LDz16qaGJEjNvtGd1aMl7M6xfMg8TdOP",
        clientSecret: "B-0YddiiEbAaAhKqOPuRs8bh44xFJAByM_ORRqTkfEZmmk-3SHO40Ek82ZjY_MsR",
        realm: "https://cse341-02a.onrender.com",
        appName: "Clue",
        scopeSeparator: " ",
        scopes: "openid profile",
        additionalQueryStringParams: { test: "hello" },
        useBasicAuthenticationWithAccessCodeGrant: true,
        usePkceWithAuthorizationCodeGrant: true,
    },
});



module.exports = { ui, swaggerDocument, swaggerUi };