const express =require("express");
const app=express();
const cors=require("cors");
const mongoose=require("mongoose");
const { json } = require("express");

const port=3001; 

 
 
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}))

mongoose.connect("mongodb+srv://salim:salim@cluster0.idfuq.mongodb.net/newitemsDB?retryWrites=true&w=majority")
const itemSchema={
    answer:String,
    option1:String,
    option2:String,
    option3:String,
    option4:String,


}
const Item=mongoose.model("Item",itemSchema);

/**app */


app.get("/items",(req,res)=>{
    Item.aggregate([{
        $match:{}
        
    }, { $sample: { size: 1} }])
   
    .then((items)=>res.json(items))
    .then(items=>console.log(items))
    .catch((err)=>res.status(400).json("erro:"+ err));
  
});

console.log(itemSchema)


   
app.post("/newitem",(req,res)=>{
    const newItem=new Item(
        {
            answer:req.body.answer,
            option1:req.body.option1,
            option2:req.body.option2,
            option3:req.body.option3,
            option4:req.body.option4,
        }
    );
    newItem.save()
    .then(item=>console.log(item))
    .catch(err=>res.status(400).json('Erro'+err))

})


app.listen(port,function(){
    console.log("exprees port running");
});