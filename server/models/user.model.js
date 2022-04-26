// const mongoose = require("../connection");
// require('dotenv').config();

const mongoose = require("mongoose"); 

const schema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        minlength: 4,
        maxlength: 50,
      },
    age: {
        type: Number,
        },
    email: {
        type: String,
        require: true,
        unique: true,
        },
    password: { type: String },
    role: {
        default: user,
        },
    correctAnswers: {
        default: 0,
        }
})

const User = mongoose.model("User", schema);

exports.model = User;