require('dotenv').config();
const mongoDBConnection = process.env.DB_CONNECTION;

const mongoose = require("mongoose");

module.exports = mongoose;
 