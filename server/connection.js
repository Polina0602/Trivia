require('dotenv').config();
// const mongoDBConnection = process.env.DB_CONNECTION;
const mongoDBConnection = process.env.DB_CONNECTION_LOCAL
const mongoose = require("mongoose");

module.exports = mongoose;
