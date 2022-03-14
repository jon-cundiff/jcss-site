require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const indexRoutes = require("./routes");
const authRoutes = require("./routes/login");

const PORT = process.env.PORT || 8080;

const whitelist = process.env.WHITELIST ? process.env.WHITELIST.split(",") : [];

app.use(express.json());
app.use(cookieParser(process.env.COOKIE));
app.use(
    cors({
        origin: (origin, cb) => {
            if (!origin || whitelist.indexOf(origin) !== -1) {
                cb(null, true);
            } else {
                cb(new Error("Not allowed by CORS"));
            }
        },
        credentials: true,
    })
);

app.use("/", indexRoutes);
app.use("/auth", authRoutes);

app.listen(PORT, () => console.log(`Running on port ${PORT}`));
