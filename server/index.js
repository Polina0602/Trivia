
const http=require("http");
const {Server}=require("socket.io");
const port = process.env.PORT || 3500;
require("dotenv").config();
// const questionRouter = require('./routers/questions.router')

const express = require("express");
const app = express();

const { json } = require("express");

const mongoose = require("mongoose");

const cors = require('cors');
app.use(cors());
app.options('*', cors());

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/auth', require('./routers/auth.router'))
// app.use('/questions',require('./routers/questions.router'))

async function start() {
  try {
    await mongoose
    .connect("mongodb+srv://salim:salim@cluster0.idfuq.mongodb.net/newitemsDB?retryWrites=true&w=majority")
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

const itemSchema={
  id:String,
  question:String,
  answer1:String,
  answer2:String,
  answer3:String,
  answer4:String,
  correct_answer:String,
}
const Item=mongoose.model("Item",itemSchema);
console.log(itemSchema)

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

app.get("/items",(req,res)=>{
  Item.find()
  .then((items) => res.json(items))
  .catch((err) => res.status(400).json("Error: " + err));
  // Item.aggregate([{
  //     $match:{}
      
  // }, { $sample: { size:5} }])
 
  // .then((items)=>res.json(items))
  // .then(items=>console.log(items))
  // .catch((err)=>res.status(400).json("error:"+ err));

});

console.log(itemSchema)

app.get("/item1",(req,res)=>{
  Item1.find()
  .then((items) => res.json(items))
  .catch((err) => res.status(400).json("Error: " + err));
});
console.log(itemSchema1)
 
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
const server=http.createServer(app)
const io=new Server(server,{
  cors:{
    origin:"http://localhost:3000",
    methods:["GET","POST"],
  },
});

io.on("connect",(socket)=>{
//console.log(`user connect: ${socket.id}`)
socket.on("send_message",(data)=>{
  console.log(data);
  socket.broadcast.emit("res_mes",data)
})
})
server.listen(3001,()=>{
  console.log("socket is running")
});

start()
 







// mongoose
//   .connect(process.env.DB_CONNECTION)
//   .then(() => {
//     console.log("connected to MongoDB...");
//   })
//   .catch((err) => {
//     console.log("Could not connect to Mongodb", err);
//   });
  

