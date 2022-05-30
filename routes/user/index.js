const express = require('express');
const { route } = require('./feed.routes');
const routes = express();

const feedRoutes = require('./feed.routes');

routes.use('/feed', feedRoutes);

module.exports = routes;
