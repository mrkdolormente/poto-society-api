require('dotenv').config();

const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const { authorization } = req.headers;

  const tokenChuncks = (authorization || '').split(' ');
  const token = tokenChuncks.length === 2 ? tokenChuncks[1] : '';

  jwt.verify(token, process.env.SECRET, (err) => {
    if (err) {
      res.status(401).send('Verification Failed!');
    } else {
      next();
    }
  });
};

module.exports = {
  verifyToken,
};
