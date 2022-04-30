require("dotenv").config();
const port = process.env.PORT || 3500;

const express = require("express");
const app = express();

const mongoose = require("mongoose");
<<<<<<< HEAD

const cors = require('cors');
app.use(cors());
app.options('*', cors());

app.use(express.json())
=======

require("dotenv").config();

const cors = require('cors');

// const app = express();
// app.use(cors());
app.options('*', cors());

const port = process.env.PORT || 3500;
>>>>>>> 63c6dcbef875cb5396f3dad0f06250fcc4ce458e

app.use('/api/auth', require('./routers/auth.router'))

async function start() {
  try {
    await mongoose
<<<<<<< HEAD
    .connect("mongodb://127.0.0.1:27017/?readPreference=primary&directConnection=true&ssl=false")
=======
    .connect(process.env.DB_CONNECTION)
>>>>>>> 63c6dcbef875cb5396f3dad0f06250fcc4ce458e
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
  

