require('dotenv').config();
const jwt = require('jsonwebtoken');

const verifyUser = (req, res) => {
  const { email, password } = req.body;

  const authToken = jwt.sign({ email, password }, process.env.SECRET, { expiresIn: '5m' });

  res.status(200).send({
    token: authToken,
  });
};

module.exports = {
  verifyUser,
};
