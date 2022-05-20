const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const taxRouter = require("./routes/tax");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/tax", taxRouter);

module.exports = app;
