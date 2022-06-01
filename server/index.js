require("dotenv").config();
const questionRouter = require('./routers/questions.router')
const port = process.env.PORT || 3500;

const express = require("express");
const app = express();

const mongoose = require("mongoose");

const cors = require('cors');
app.use(cors());
app.options('*', cors());

app.use(express.json())

app.use('/api/auth', require('./routers/auth.router'))
app.use('/questions',require('./routers/questions.router'))

async function start() {
  try {
    await mongoose
    .connect("mongodb://127.0.0.1:27017/?readPreference=primary&directConnection=true&ssl=false")
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
  

