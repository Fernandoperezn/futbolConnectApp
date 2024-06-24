const jwt = require('jsonwebtoken');
const User = require('../models/users');

const isAuth = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(404).json({ msg: 'Authorization header is required' });
  }

  const [bearer, token] = authHeader.split(' ');

  if (bearer !== 'Bearer') {
    return res.status(400).json({ message: 'Authorization header format is Bearer {token}' });
  }

  if (!token) {
    return res.status(400).json({ msg: 'Token is required' });
  }

  try {
    const payload = jwt.decode(token, process.env.JWT_SECRET);
    const now = Math.floor(Date.now() / 1000);

    if (payload.exp < now) {
      return res.status(403).json({ msg: 'Token has expired' });
    }

    const user = await User.findOne(payload.id);
    if (!user) {
      return res.status(403).json({ msg: 'User not found' });
    }

    req.role = payload.role;
    req.user = user;
    next();
  } catch (error) {
    return res.status(403).json({ message: `Token Error: ${error.message}` });
  }
};

module.exports = { isAuth };
