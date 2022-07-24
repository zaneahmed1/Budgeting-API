const express = require("express");
const app = express();
const transactionsController = require("./controllers/transactionsController");
const cors = require("cors");

app.use(cors());

app.use(express.json());
app.use((req, res, next) => {
  console.log("This code runs for EVERY request");
  next();
});

app.get("/", (req, res) => {
  res.send("Welcome!");
});

app.use("/transactions", transactionsController);

app.get("*", (req, res) => {
  res.status(404).json({ error: "page not found" });
});

module.exports = app;
