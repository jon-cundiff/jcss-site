const express = require("express");
const router = express.Router();
const models = require("../models");
const validateJwt = require("../middleware/validateJwt");
const applyJwt = require("../middleware/applyJwt");

const defaultTheme = {
    primary: "#6e41e2",
    secondary: "#2daf93",
    info: "#428bf9",
    success: "#27ae60",
    danger: "#c7302b",
};

router.get("/", applyJwt, async (req, res) => {
    const include = [];
    if (req.userId) {
        include.push({
            model: models.Favorite,
            as: "favorites",
            where: { user_id: req.userId },
            required: false,
        });
    }
    try {
        const themes = await models.Theme.findAll({
            order: [["createdAt", "DESC"]],
            include,
        });

        res.json({
            success: true,
            themes,
        });
    } catch (err) {
        console.log(err);
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
            order: [["createdAt", "DESC"]],
            include: [
                {
                    model: models.Favorite,
                    as: "favorites",
                    where: { user_id: req.userId },
                    required: false,
                },
            ],
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

router.get("/favorites", validateJwt, async (req, res) => {
    try {
        const favorites = await models.Theme.findAll({
            order: [["createdAt", "DESC"]],
            include: [
                {
                    model: models.Favorite,
                    as: "favorites",
                    where: { user_id: req.userId },
                },
            ],
        });
        res.json({
            success: true,
            favorites,
        });
    } catch (err) {
        console.log(err);
        res.status(400).json({
            success: false,
            message: "There was an error saving the favorite",
        });
    }
});

router.post("/add-favorite", validateJwt, async (req, res) => {
    const { themeId } = req.body;
    try {
        const favorite = await models.Favorite.create({
            user_id: req.userId,
            theme_id: themeId,
        });

        res.status(201).json({
            success: true,
            message: "Favorite saved",
            favorite,
        });
    } catch {
        res.status(400).json({
            success: false,
            message: "There was an error saving the favorite",
        });
    }
});

router.delete("/delete-favorite", validateJwt, async (req, res) => {
    const { id } = req.body;
    console.log(id);
    try {
        await models.Favorite.destroy({
            where: {
                id,
                user_id: req.userId,
            },
        });
        res.json({
            success: true,
            message: "Favorite successfully removed",
        });
    } catch (err) {
        console.log(err);
        res.status(400).json({
            success: false,
            message: "Error removing favorite",
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
        res.json({
            success: true,
            message: "Theme successfully deleted",
        });
    } catch {
        res.status(400).json({
            success: false,
            message: "There was an error deleting the theme.",
        });
    }
});

module.exports = router;
