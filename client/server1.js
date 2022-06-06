const express =require("express");
const app=express();
const cors=require("cors");
const mongoose=require("mongoose");
const { json } = require("express");

const port=3002; 
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}))

mongoose.connect("mongodb+srv://salim:salim@cluster0.idfuq.mongodb.net/newitemsDB1?retryWrites=true&w=majority")
const itemSchema1={
    question:String,
    answer1:String,
    answer2:String,
    answer3:String,
    answer4:String,
    correct_answer:String,
}
const Item1=mongoose.model("Item1",itemSchema1);
console.log(itemSchema1)
/**app */
app.get("/item1",(req,res)=>{
    Item1.find()
    .then((items) => res.json(items))
    .catch((err) => res.status(400).json("Error: " + err));
});
console.log(itemSchema1)
// app.post("/newitem",(req,res)=>{
//     const newItem=new Item(
//         {
//             answer:req.body.answer,
//             option1:req.body.option1,
//             option2:req.body.option2,
//             option3:req.body.option3,
//             option4:req.body.option4,
//         }
//     );
//     newItem.save()
//     .then(item=>console.log(item))
//     .catch(err=>res.status(400).json('Erro'+err))

// })
app.listen(port,function(){
    console.log("exprees port running server1");
});