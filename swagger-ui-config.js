const SwaggerUI = require('swagger-ui');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');

const ui = SwaggerUI;

ui.initOAuth({
    clientId: "LDz16qaGJEjNvtGd1aMl7M6xfMg8TdOP",
    clientSecret: "B-0YddiiEbAaAhKqOPuRs8bh44xFJAByM_ORRqTkfEZmmk-3SHO40Ek82ZjY_MsR",
    realm: "https://cse341-02a.onrender.com",
    appName: "Clue",
    scopeSeparator: " ",
    scopes: "openid profile",
    additionalQueryStringParams: { test: "hello" },
    useBasicAuthenticationWithAccessCodeGrant: true,
    usePkceWithAuthorizationCodeGrant: true
});

module.exports = { ui, swaggerDocument, swaggerUi };