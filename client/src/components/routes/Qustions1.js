import React from 'react'
import {useState,useEffect} from 'react';
import axios from 'axios';
import { Rating } from '@mui/material';
//reload=false;
//function Qustion({data:{qustion,correc_answer,incorrect_answers1,incorrect_answers2,incorrect_answers3}}) {
   function Qustion1(){
    var counter1=0;
    var counter2=0;
    var re=0;
   function increase()
   {
    //window.location.reload();
    re++;
    alert(re);
    if(re>5){
    alert("re")
    }
    
   }
   function reload()
    {
      alert(counter1,counter2)
    }
    
      // function nextqustion() {
      //   window.location.reload();
      //     }
    
      //   } 
     
  function answers(e){
   
//   let c=e.target.value;
//  console.log(c);
    //const a=e.target.value;
    if(e===5){alert("b")}
  if(e.target.value==="1974" || e.target.value==="43,323" ||e.target.value==="2018"||e.target.value==="5"||e.target.value==="30")
  {
    // alert("ok");
    counter1++
   // window.location.reload();
  //  alert( counter1)
  }
  else{
    // alert("no");
   // window.location.reload();
    counter2++;
  }
  // console.log(counter1,counter2);
   
    
    //       //alert(Object.values(items));
//  items.forEach(Element=>{ 
//       console.log(Element.Element);
//      })
   
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
        fetch("http://localhost:3500/item1")
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
                <button value={item.answer1} onClick={answers} className='normal-button'>{item.answer1}</button>
                <button value={item.answer2} onClick={answers} className='normal-button'>{item.answer2}</button>
                <button value={item.answer3} onClick={answers} className='normal-button'>{item.answer3}</button>
                <button value={item.answer4} onClick={answers} className='normal-button'>{item.answer4}</button>

                </p>
                </div>            
                <button onClick={increase}  className='normal-button'>next question</button>  
                <button onClick={reload}  className='normal-button'>check the result</button>    
              </h1>
              
            )
          })}
        
      </div>
    );
  }
  
  export default Qustion1;
  