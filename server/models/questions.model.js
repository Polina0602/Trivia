const {Schema, model} = require('mongoose')
const itemSchema= new Schema({
    question: String,
    option1: String,
    option2: String,
    option3: String,
    option4: String,
})
module.exports = model("Question",itemSchema);