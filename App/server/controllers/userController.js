const User = require('../Models/userModel');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const user = await User.create({
      username: username,
      email: email,
      password: password,
    });

    const token = jwt.sign(
      {
        userId: user._id,
      },
      'JWTSECRETKEY'
    );


    //

    return res.send({ user, token });
  } catch (error) {
    return res.send(error);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.find({
      email: email,
    });

    if (!user) return res.send('No User found!');

    const token = jwt.sign(
      {
        userId: user._id,
      },
      'JWTSECRETKEY'
    );

    return res.send({ user, token });
  } catch (error) {
    return res.send(error);
  }
};

module.exports = { register, login };
