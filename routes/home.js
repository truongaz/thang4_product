const route = require('express').Router();

const homeCtrl = require('../controllers/home-ctrl')

route.get('/', homeCtrl.getHome);

module.exports = route;