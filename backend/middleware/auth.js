const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers["authorization"]; 
  // console.log(authHeader, "authHeader in auth.js", req.headers);
  const token = authHeader && authHeader.split(" ")[1];
// console.log(token, "token in auth.js");
  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // console.log(decoded, "decoded token in auth.js");
    req.user = decoded; 
    next();
  } catch (err) {
    return res.status(403).json({ message: "Token is not valid" });
  }
};

module.exports = authMiddleware;
