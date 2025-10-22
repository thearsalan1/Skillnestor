const jwt = require("jsonwebtoken");
const User = require("../models/User");

// Middleware to check whether user is authoized or not
const protect = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer ")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.id).select("-password");
      next();
    } catch (error) {
      console.error(error);
      res
        .status(401)
        .json({ success: false, message: "Not Authorized , token" });
    }
  } else {
    res.status(401).json({ message: "Not Authorized, no token provided" });
  }
};

// MiddleWare to check whether admin or not
const admin = (req, res, next) => {
  if (req.user.role === "admin") {
    next();
  } else {
    res.status(403).json({ message: "You are not Authorized" });
  }
};

module.exports = {
  protect,
  admin,
};
