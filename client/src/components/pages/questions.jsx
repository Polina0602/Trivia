import React from 'react'
import {useState,useEffect} from 'react';
import axios from 'axios';
//reload=false;
 //function Qustion({data:{qustion,correc_answer,incorrect_answers1,incorrect_answers2,incorrect_answers3}}) {
   function Questions(){
     
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
  
      function correctanswer () {
        alert('corecct');
        window.location.reload();

      
       
       
        //reload=false;
      }
    
      function uncorrectanswer(){
       
          alert('false try agin')
        // reload=true;

      }

  
    
    // const [item,setItem]=useState(
    //   {
    //     qustion:"",
    //     correc_answer:"",
    //     incorrect_answers1:"",
    //     incorrect_answers2:"",
    //     incorrect_answers3:"",
        
    //   });
      // function handelChange(event){
      //   const {name,value}=event.target;
      //   setItem(prevInput=>{
      //     return(
      //       {
      //         ...prevInput,
      //         [name]:value,
      //       }
      //     )
      //   })
    
      // }
      const [items,setItems]=useState([{
        qustion:"",
        correc_answer:"",
        incorrect_answers1:"",
        incorrect_answers2:"",
        incorrect_answers3:"",
        
    
  
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
     
//    function Additem(event){
//      event.preventDefault();
//      const newItem={
//        qustion:item.qustion,
//       option1:item.option1,
//        option2:item.option2, 
//         option3:item.option3,
  
//        option4:item.option4,
  
  
  
//      }
//      axios.post("http://localhost:3001/newitem",newItem);
//      console.log("newitem")
//      alert('item added');
  
//      setItem({
//        answer:"",
//         option1:"",
//         option2:"",
//         option3:"",
//         option4:"",
//      });
//    }
   
   const [qoust,setQutes]=useState('');
   const getQute=()=>{
     fetch("http://localhost:3500/items")
     .then(res=>res.json())
     .then(data=>{
       //let randomnum=Math.floor(Math.random()*data.length);
       setQutes(data);
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
          <input onChange={handelChange} name="option4" value={item.option4} placeholder="option4"></input> */}
  
          {/* <input onChange={handelChange} name="description" value={item.description}  placeholder="description"></input>
          <input onChange={handelChange} name="qustion" value={item.qustion}  placeholder="qustion"></input>
          <button onClick={Additem}>Additem</button>
          */}
          
          <button onClick={getQute}>get items</button> 
                 </div>
                 
          {items.map(item=>{
            return(
              <h1 key={item} style={{background:'white',width:'86%',margin:'auto auto'}}>
  
               <h1 >{item.question }</h1>
               
               
               <div >
               <p >
                 <h1>{Math.random}                </h1>

                <button onClick={correctanswer} className='normal-button' >{item.correc_answer}</button>
                <button onClick={uncorrectanswer} className='normal-button'>{item.incorrect_answers1}</button>
                <button onClick={uncorrectanswer} className='normal-button'>{item.incorrect_answers2}</button>
                <button onClick={uncorrectanswer} className='normal-button'>{item.incorrect_answers3}</button>
                </p>
                </div>            
                <button onClick={increase}  className='normal-button'>next question</button>    
              </h1>
              
            )
          })}
        
      </div>
    );
  }
  
  export default Questions;