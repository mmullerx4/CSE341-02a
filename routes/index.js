const express = require('express');
const router = express.Router();
const { auth } = require('express-openid-connect');

console.log('SECRET:', process.env.CLIENT_SECRET);
console.log('CLIENT_ID:', process.env.CLIENT_ID);
const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.CLIENT_SECRET,
  baseURL: 'https://cse341-02a.onrender.com',
  clientId: process.env.CLIENT_ID,
  issuerBaseURL: 'https://dev-g0kggvb542slyuvi.us.auth0.com'
};

router.use('/', require('./swagger'));
// auth router attaches /login, /logout, and /callback routes to the baseURL
router.use(auth(config)); //this auth protects all routes defined after this point
//include characters and weapons routes
router.use('/characters', require('./characters'));
router.use('/weapons', require('./weapons'));


// req.isAuthenticated is provided from the auth router
router.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

//export routes
module.exports = router;