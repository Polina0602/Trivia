import React from 'react'
import {useState,useEffect} from 'react';
import axios from 'axios';
import { Rating } from '@mui/material';
//reload=false;
//function Qustion({data:{qustion,correc_answer,incorrect_answers1,incorrect_answers2,incorrect_answers3}}) {
   function Qustion(){
     
    const [counter, setCounter] = useState(0);
 
      const increase = () => { 
        
        setCounter(counter => counter + 1);
        
        if(counter<5){
       window.location.reload(false);
  
        }
      };
      // function nextqustion() {
      //   window.location.reload();
      //     }
    
      //   } 
  function answers(){
      //alert(Object.values(items));
 items.forEach(Element=>{ 
  const a=Element.correct_answer;
   const b=Element.answer1.value;
   const c=Element.answer2;
   const d=Element.answer3;
   const e=Element.answer4;
   if(a==b){
     alert(a);
   }else{alert("no");}
  console.log(a);


  
    
     })
     
    
   
  }
  
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
        fetch("http://localhost:3001/items")
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
     fetch("http://localhost:3001/items")
     .then(res=>res.json())
     .then(data=>{
       //let randomnum=Math.floor(Math.random()*data.length);
       setqutes(data);
     })
   }


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
            return(
              <h1 key={items.qustion} style={{background:'white',width:'86%',margin:'auto auto'}}>
                
               <h1 >{item.question}</h1>
               <div > 
               <p >
                 <h1>{Math.random}</h1>
                <button  onClick={answers} className='normal-button'>{item.answer1}</button>
                <button  onClick={answers} className='normal-button'>{item.answer2}</button>
                <button  onClick={answers} className='normal-button'>{item.answer3}</button>
                <button  onClick={answers} className='normal-button'>{item.answer4}</button>
                </p>
                </div>            
                <button onClick={increase}  className='normal-button'>next question</button>    
              </h1>
              
            )
          })}
        
      </div>
    );
  }
  
  export default Qustion;
  