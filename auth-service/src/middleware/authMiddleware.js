const jwt = require("jsonwebtoken");

const protect = (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({
        message: "No token, authorization denied"
      });
    }

    const tokenValue = token.split(" ")[1];

    const decoded = jwt.verify(tokenValue, process.env.JWT_SECRET);

    req.user = decoded;

    next();
  } catch (error) {
    res.status(401).json({
      message: "Invalid token"
    });
  }
};

module.exports = { protect };