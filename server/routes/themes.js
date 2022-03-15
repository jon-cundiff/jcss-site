const express = require("express");
const router = express.Router();
const models = require("../models");
const validateJwt = require("../middleware/validateJwt");

const defaultTheme = {
    primary: "#6e41e2",
    secondary: "#2daf93",
    info: "#428bf9",
    success: "#27ae60",
    danger: "#c7302b",
};

router.get("/", async (req, res) => {
    const themes = await models.Theme.findAll({
        order: [["createdAt", "DESC"]],
    });

    res.json(themes);
});

router.post("/new", validateJwt, (req, res) => {
    const { primary, secondary, info, success, danger } = req.body;
    try {
        const theme = model.Theme.create({
            primary: primary ? primary : defaultTheme.primary,
            secondary: secondary ? secondary : defaultTheme.secondary,
            info: info ? info : defaultTheme.info,
            success: success ? success : defaultTheme.success,
            danger: danger ? danger : defaultTheme.danger,
            user_id: req.userId,
        });
        res.json({
            success: true,
            message: "Theme successfully created",
            newTheme: theme,
        });
    } catch {
        res.status(400).json({
            success: false,
            message: "There was an error saving the theme.",
        });
    }
});

module.exports = router;