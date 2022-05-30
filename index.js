require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.SERVER_PORT;

const bodyParser = require('body-parser');
const { authentication } = require('./middlewares');

const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');

app.use(bodyParser.json());

app.use('/auth', authRoutes);
app.use('/user', authentication.verifyToken, userRoutes);

app.listen(port, () => {
  console.log(`Example app listening to port ${port}`);
});
