const indexRoutes = require("../routes/index");
const request = require("supertest");
const express = require("express");
const app = express();

app.use("/", indexRoutes);

test("index route responds with json", (done) => {
    request(app).get("/").expect("Content-Type", /json/).expect(200, done);
});
