const express = require('express');
const passport = require('passport');
const controller = require('../controllers/analytics');
const routes = express.Router();

routes.get('/overview', passport.authenticate('jwt', {session: false}), controller.overview);
routes.get('/analytics', passport.authenticate('jwt', {session: false}), controller.analytics);


module.exports = routes;
