const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>esta es otra prueba</h1>");
});

app.listen("3001", () => {
  console.log("corriendo servidor AWS");
});
