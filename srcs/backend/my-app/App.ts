// Importing module
import express from "express";
import { Z_ASCII } from "zlib";

const app = express();
const PORT: Number = 5000;

// Handling GET / Request
app.get("/", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.send("Welcome to typescript backend!");
});

// Server setup
app.listen(PORT, () => {
  console.log(
    "The application is listening " + "on port http://localhost:" + PORT
  );
});
