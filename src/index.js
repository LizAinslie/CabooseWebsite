const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello world!");
});

// Redirects
app.get("/out/github", (req, res) => {
  res.redirect("https://github.com/CabooseLang");
});

app.get("/out/discord", (req, res) => {
  res.redirect("https://discord.gg/ZTVuFVF");
});

app.get("/out/docs", (req, res) => {
  res.redirect("https://docs.caboose.ga");
});

app.listen(8080);
