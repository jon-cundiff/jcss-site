const express = require("express");
const router = express.Router();
const validateJwt = require("../middleware/validateJwt");

router.get("/", (req, res) => {
    res.json({ works: "Hello Heroku" });
});

router.get("/test", validateJwt, (req, res) => {
    res.json({ success: true });
});

module.exports = router;
