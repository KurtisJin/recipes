const router = require("express").Router();
const registerRoutes = require("./register");

// Post routes
router.use("/register", registerRoutes);

module.exports = router;
