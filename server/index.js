const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.DB_CONNECTION)
  .then(() => {
    console.log("connected to MongoDB...");
  })
  .catch((err) => {
    console.log("Could not connect to Mongodb", err);
  });

const port = process.env.PORT || 3500;
app.listen(port, () => console.log(`Listening on port ${port}`));
