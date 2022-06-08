const express =require("express");
const app=express();
const cors=require("cors");
const mongoose=require("mongoose");
const { json } = require("express");

const port=3005; 

   
 
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}))

//0806
app.use('/api/auth', require('./routers/auth.router'))

// async function start() {
//     try {
//       await mongoose
//       .connect("mongodb+srv://salim:salim@cluster0.idfuq.mongodb.net/newitemsDB?retryWrites=true&w=majority")
//       .then(() => {
//         console.log("connected to MongoDB...");
       
//       })
//       .catch((err) => {
//         console.log("Could not connect to Mongodb", err);
//       });     
  
//       app.listen(port, () => console.log(`Listening on port ${port}`));
//     } catch (e) {
//       console.log('Server Error', e.message)
//       process.exitCode(1)
//     }
//   }
//       start()
//
mongoose.connect("mongodb+srv://salim:salim@cluster0.idfuq.mongodb.net/newitemsDB?retryWrites=true&w=majority")
const itemSchema={
    question:String,
    answer1:String,
    answer2:String,
    answer3:String,
    answer4:String,
    correct_answer:String,
}
const Item=mongoose.model("Item",itemSchema);
console.log(itemSchema)
/**app */

app.get("/items",(req,res)=>{
    Item.aggregate([{
        $match:{}
        
    }, { $sample: { size:1} }])
   
    .then((items)=>res.json(items))
    .then(items=>console.log(items))
    .catch((err)=>res.status(400).json("error:"+ err));
  
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
    .catch(err=>res.status(400).json('Error'+err))

})


app.listen(port,function(){
    console.log("express port running");
});