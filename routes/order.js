const express = require('express');
const passport = require('passport');
const controller = require('../controllers/order');
const routes = express.Router();

routes.get('/', passport.authenticate('jwt', {session: false}), controller.getAll);
routes.post('/', passport.authenticate('jwt', {session: false}), controller.create);


module.exports = routes;
