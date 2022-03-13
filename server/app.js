const express = require("express");
const app = express();
const indexRoutes = require("./routes");

const PORT = process.env.PORT || 8080;

app.use("/", indexRoutes);

app.listen(PORT, () => console.log(`Running on port ${PORT}`));
