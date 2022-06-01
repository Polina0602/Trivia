// const express =require("express");
// const app=express();
const cors=require("cors");
const mongoose=require("mongoose");
const { json } = require("express");
const Question = require("../models/questions.model");
const Router = require("express")
const questionRouter = new Router(); 


// const cors = require('cors');
// app.use(cors());
// app.options('*', cors());

// router.use(express.json());
// router.use(express.urlencoded({extended:false}))

// mongoose.connect("mongodb+srv://salim:salim@cluster0.idfuq.mongodb.net/newitemsDB?retryWrites=true&w=majority")


/**app */

questionRouter.post(
    "/questions",    
 async (req, res) => { 
     const {question, option1, option2, option3} = req.body
     console.log(req.body.option1)
     const post = await Post.create({question, option1, option2, option3})
     res.json(post)
//   await res.send("Hello !!!")
})



// router.get("/items",(req,res)=>{
//     Item.aggregate([{
//         $match:{}
        
//     }, { $sample: { size: 1} }])
   
//     .then((items)=>res.json(items))
//     .then(items=>console.log(items))
//     .catch((err)=>res.status(400).json("error:"+ err));
  
// });

// console.log(Question)


   
// router.post("/newitem",(req,res)=>{
//     const newItem=new Item(
//         {
//             question:req.body.question,
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

module.exports = questionRouter;
// // app.listen(port,function(){
// //     console.log("exprees port running");
// // });