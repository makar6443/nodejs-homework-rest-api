const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const { User } = require("../../models/users");
const catchAsync = require("../../utils/catchAsync");
dotenv.config({ path: "./.env" });

const protect = catchAsync(async (req, res, next) => {
  const token =
    req.headers.authorization?.startsWith("Bearer") &&
    req.headers.authorization.split(" ")[1];

  if (!token) return res.status(401).json({ message: "Not authorized" });
  let decoded;
  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    return res.status(401).json({ message: "Not authorized" });
  }

  const currentUser = await User.findById(decoded.id);
  console.log(currentUser);
  if (!currentUser) return res.status(401).json({ message: "Not authorized" });

  req.user = currentUser;
  next();
});

module.exports = {
	protect
}