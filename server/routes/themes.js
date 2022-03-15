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
    try {
        const themes = await models.Theme.findAll({
            order: [["createdAt", "DESC"]],
        });

        res.json({
            success: true,
            themes,
        });
    } catch {
        res.status(400).json({
            success: false,
            message: "Error getting themes",
        });
    }
});

router.get("/profile", validateJwt, async (req, res) => {
    try {
        const themes = await models.Theme.findAll({
            where: { user_id: req.userId },
        });

        res.json({
            success: true,
            themes,
        });
    } catch {
        res.status(400).json({
            success: false,
            message: "Error getting themes",
        });
    }
});

router.post("/new", validateJwt, (req, res) => {
    const { primary, secondary, info, success, danger } = req.body;
    try {
        const theme = models.Theme.create({
            primary: primary ? primary : defaultTheme.primary,
            secondary: secondary ? secondary : defaultTheme.secondary,
            info: info ? info : defaultTheme.info,
            success: success ? success : defaultTheme.success,
            danger: danger ? danger : defaultTheme.danger,
            user_id: req.userId,
        });
        res.status(201).json({
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

router.put("/update", validateJwt, (req, res) => {
    const { primary, secondary, info, success, danger, id } = req.body;
    try {
        const theme = models.Theme.update(
            {
                primary: primary ? primary : defaultTheme.primary,
                secondary: secondary ? secondary : defaultTheme.secondary,
                info: info ? info : defaultTheme.info,
                success: success ? success : defaultTheme.success,
                danger: danger ? danger : defaultTheme.danger,
                user_id: req.userId,
            },
            {
                where: {
                    id,
                    user_id: req.userId,
                },
            }
        );
        res.status(200).json({
            success: true,
            message: "Theme successfully updated",
            newTheme: theme,
        });
    } catch {
        res.status(400).json({
            success: false,
            message: "There was an error updating the theme.",
        });
    }
});

router.delete("/delete", validateJwt, async (req, res) => {
    const { id } = req.body;
    try {
        await models.Theme.destroy({
            where: {
                id,
                user_id: req.userId,
            },
        });
    } catch {
        res.status(400).json({
            success: false,
            message: "There was an error deleting the theme.",
        });
    }
});

module.exports = router;
