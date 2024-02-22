const express = require('express');
const router = express.Router();

router.use('/', require('./swagger'));
router.use('/characters', require('./characters'));
router.use('/weapons', require('./weapons'));

const { auth } = require('express-openid-connect');

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: 'a long, randomly-generated string stored in env',
  baseURL: 'http://localhost:8080',
  clientID: 'LDz16qaGJEjNvtGd1aMl7M6xfMg8TdOP',
  issuerBaseURL: 'https://dev-g0kggvb542slyuvi.us.auth0.com'
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
router.use(auth(config));

// req.isAuthenticated is provided from the auth router
router.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

//export routes
module.exports = router;