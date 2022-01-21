require("dotenv").config();
const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
const pino = require("express-pino-logger")();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

app.get("/api/get-speech-token", async (req, res, next) => {});

app.listen(3001, () =>
  console.log("Express server is running on localhost:3001")
);
