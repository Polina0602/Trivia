const express = require("express");
const app = express();
const mongoose = require("mongoose");

require("dotenv").config();

const cors = require('cors');

// const app = express();
// app.use(cors());
app.options('*', cors());

const port = process.env.PORT || 3500;

app.use('/api/auth', require('./routers/auth.router'))

async function start() {
  try {
    await mongoose
    .connect(process.env.DB_CONNECTION)
    .then(() => {
      console.log("connected to MongoDB...");
    })
    .catch((err) => {
      console.log("Could not connect to Mongodb", err);
    });
    app.listen(port, () => console.log(`Listening on port ${port}`));
  } catch (e) {
    console.log('Server Error', e.message)
    process.exitCode(1)
  }
}

start()








// mongoose
//   .connect(process.env.DB_CONNECTION)
//   .then(() => {
//     console.log("connected to MongoDB...");
//   })
//   .catch((err) => {
//     console.log("Could not connect to Mongodb", err);
//   });
  

