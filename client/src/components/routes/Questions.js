import React from 'react'
import {useState,useEffect} from 'react';
import axios from 'axios';
import { Rating } from '@mui/material';
import { orange } from '@mui/material/colors';
import { Box, Typography, TextField } from "@mui/material";
import io from "socket.io-client";
const socket=io.connect("http://localhost:3001")



//reload=false;
//function Qustion({data:{qustion,correct_answer,incorrect_answers1,incorrect_answers2,incorrect_answers3}}) {
 
function Questions(){
  const sendmessage=()=>{
   
  };
  useEffect(()=>{
    socket.on("res_mes",(data)=>{
      alert(data);
    })
  })

    var counter1=0;
    var counter2=0;
    var re=0;
    
   function increase()
   {
      // eslint-disable-next-line no-restricted-globals
      re = location.search;
      // alert('re ' + re )
      re++;
      window.location.assign("http://localhost:3500/Questions" 
      );
      console.log('re ' + re )
      if(re>5){
        alert("GAME OVER")
      }    
    }

   function reload()
    {
      console.log(counter1,counter2)
    }
    
      // function nextqustion() {
      //   window.location.reload();
      //     }
    
      //   } 
     
 
      //Salim   
      // //   let c=e.target.value;
      // //  console.log(c);
      //     //const a=e.target.value;
      //     if(e==5){alert("b")}
      //   if(e.target.value=="bill gates" || e.target.value=="1208" ||e.target.value=="Zichron Yaakov"||e.target.value=="1909"||e.target.value=="Sacramento")
      //   {
      //     // alert("ok");
      //     counter1++
      //    // window.location.reload();
      //   //  alert( counter1)
      //   }
      //   else{
      //     // alert("no");
      //    // window.location.reload();
      //     counter2++;
      //   }
      //   // console.log(counter1,counter2);
        
          
      //     //       //alert(Object.values(items));
      // //  items.forEach(Element=>{ 
      // //       console.log(Element.Element);
      // //      })
   
      // }
  
    const [item,setItem]=useState(
      {
        question:"",
        answer1:"",
        answer2:"",
        answer3:"",
        answer4:"",
        correct_answer:"",
      });

    function handelChange(event){
      const {name,value}=event.target;
      setItem(prevInput=>{
        return(
          {  
              ...prevInput,
              [name]:value,
          }
          )
      })    
    }

      const [items,setItems]=useState([{
        question:"",
        answer1:"",
        answer2:"",
        answer3:"",
        answer4:"",
        correct_answer:"",
      }]);

      useEffect(()=>{
        fetch("http://localhost:3500/items")
        .then(res=>{
          if(res.ok){
            return res.json();
          }
        }).then(jsonRes=>setItems(jsonRes))  
        .catch(err=>console.log(err));
      },[]);
     
  //  function Additem(event){
  //    event.preventDefault();
  //    const newItem={
  //      qustion:item.qustion,
  //     option1:item.option1,
  //      option2:item.option2, 
  //       option3:item.option3,
  
  //      option4:item.option4,
  
  
    //  }
    //  axios.post("http://localhost:3001/newitem",newItem);
    //  console.log("newitem")
    //  alert('item added');
  
    //  setItem({
    //    answer:"",
    //     option1:"",
    //     option2:"",
    //     option3:"",
    //     option4:"",
  //    });
  //  }
   
        const [qoust,setqutes]=useState('');

        const getqute=()=>{
          fetch("http://localhost:3500/items")
          .then(res=>res.json())
          .then(data=>{
            //let randomnum=Math.floor(Math.random()*data.length);
            setqutes(data);
          })
        }

        function fifty() {
                  
                  
        } 

        const [color, setColor] = useState("orange")
  
      return (
        <div className="container">          
          <div className="qustionClass">
            <h1>{qoust.text}</h1>
           {/* <input onChange={handelChange} name="qustion" value={item.qustion} placeholder="qustion"></input>
          <input onChange={handelChange} name="option1" value={item.option1} placeholder="option1"></input>
          <input onChange={handelChange} name="option2" value={item.option2} placeholder="option2"></input>
          <input onChange={handelChange} name="option3" value={item.option3} placeholder="option3"></input>
          <input onChange={handelChange} name="option4" value={item.option4} placeholder="option4"></input>
  
          <input onChange={handelChange} name="description" value={item.description}  placeholder="description"></input>
          <input onChange={handelChange} name="qustion" value={item.qustion}  placeholder="qustion"></input> */}
       {/* <button onClick={Additem}>Additem</button> */}
          
          
          {/* <button onClick={getqute}>get items</button>  */}
                 </div>
              
          {items.map(item=>{
            // var a = item.correct_answer;
            // console.log(a)            
         
            function answers(event,color){

              socket.emit("send_message",event.target.value)

              console.log(item.correct_answer);
              console.log(event.target.value)
              if(event.target.value === item.correct_answer)
              {    
           
             
                setColor("green")
                // counter1++           
                alert('answer is right ')                
              }
              else{
                
                setColor("red")
                // counter2++
                alert('wrong answer ')               
              }
              
            }
           
            return( 
              <div key={items.qustion} style={{background:'white',width:'86%',margin:'auto auto'}}>
                <h1 >{item.question}</h1>
                <div > 
                  <p >
                 {/* <h1>{Math.random}</h1> */}
                  <button id='1' value={item.answer1} style={{backgroundColor: {color}}} onClick={answers} className='normal-button'>{item.answer1}</button>                 
                  <button id='2' value={item.answer2} onClick={answers} className='normal-button'>{item.answer2}</button>
                  <button id='3' value={item.answer3} onClick={answers} className='normal-button'>{item.answer3}</button>
                  <button id='4' value={item.answer4} onClick={answers} className='normal-button'>{item.answer4}</button>

                  </p>
                </div> 
                <Box>           
                  <button onClick={increase}  className='normal-button'>next question</button>  
                  <button onClick={reload}  className='normal-button'>check the result</button> 
                  <button id='123' onClick={fifty} className='normal-button'>50 / 50</button> 
                </Box>  
              </div>              
            )
          })}        
      </div>
      
    );
    
  }
  
  
  export default Questions;
  
  