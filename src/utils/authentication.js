// Imports JWT module
const jwt = require("jsonwebtoken");

// USER AUTHENTICATION

module.exports.user_authentication = (req, res, next) => {
  
  try {

    const token = req.headers.authorization.split(" ")[1];
    const verifyToken = jwt.verify(token, process.env.TOKEN_KEY);
    
    if (verifyToken) {
      req.user = verifyToken;
      return next();
    }

  } catch (err) {
      res.status(401).json({ error: "User validation error" });
  }

};