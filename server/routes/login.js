const express = require("express");
const router = express.Router();
const passport = require("passport");
const githubStrategy = require("passport-github-oauth20");
const jwt = require("jsonwebtoken");
const models = require("../models");

const CLIENT_BASE = process.env.CLIENT_BASE;

passport.use(
    new githubStrategy(
        {
            clientID: process.env.GH_ID,
            clientSecret: process.env.GH_SECRET,
            callbackURL: process.env.CALLBACK,
        },
        function (accessToken, refreshToken, profile, cb) {
            models.User.findOrCreate({
                where: {
                    username: profile.username,
                    url: profile.profileUrl,
                },
            }).then(([user, created]) => {
                if (!user) {
                    cb({ error: "Error logging in" });
                } else {
                    cb(null, user);
                }
            });
        }
    )
);

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    const user = await models.User.findById(id);
    if (!user) {
        done({ error: "Error retrieving user" });
    } else {
        done(null, user);
    }
});

router.get("/github", passport.authenticate("github", { scope: ["user"] }));
router.get("/github/callback", passport.authenticate("github"), (req, res) => {
    if (!req.user) {
        res.redirect(`${CLIENT_BASE}/loginstatus?failure=true`);
    } else {
        const token = jwt.sign(
            {
                id: req.user.id,
                username: req.user.username,
            },
            process.env.JWT
        );
        return res.json({ token, username: req.user.username });
    }
});

module.exports = router;
