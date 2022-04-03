const express = require('express');
const passport = require('passport');
const controller = require('../controllers/position');
const routes = express.Router();

routes.get('/:categoryId', passport.authenticate('jwt', {session: false}), controller.getByCategoryId);
routes.post('/', passport.authenticate('jwt', {session: false}), controller.create);
routes.delete('/:id', passport.authenticate('jwt', {session: false}), controller.remove);
routes.patch('/:id', passport.authenticate('jwt', {session: false}), controller.update);


module.exports = routes;
