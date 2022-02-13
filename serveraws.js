const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello express");
});

app.listen("3001", () => {
  console.log("corriendo servidor AWS");
});
