require("dotenv").config();
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("codecShivam");
});

app.get("/login", (req, res) => {
  res.send("<h1>Please login first!!</h1>");
});

app.get("/shivam", (req, res) => {
  res.send('<a href="https://codecshivam.netlify.app">Shivam</a>');
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
