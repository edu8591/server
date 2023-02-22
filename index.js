const express = require("express");
// import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send({ hi: "there" });
});
app.get("/home", (req, res) => {
  res.send({ home: "this is the home route" });
});

app.listen(5000);
