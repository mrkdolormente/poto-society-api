const express = require('express');
const routes = express();

const loginRoutes = require('./login.routes');

routes.use('/login', loginRoutes);

module.exports = routes;
