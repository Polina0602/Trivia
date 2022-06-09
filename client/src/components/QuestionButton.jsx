
import { useState, useEffect } from 'react';

export default function QuestionButton(props){
    const [color, setColor] = useState("#fffde7")
    const [colorText, setColorText] = useState("#666")
    const {answer, correct_answer, buttonActive, onCorrectAnswer} = props
    
    // useEffect(()=>{
    //     this.answer = answer

    // },[]);
return(
    <button 
        key={answer}        
        className='normal-button'                  
        value={answer} 
        style={{backgroundColor: color, color: colorText}} 
        disabled={buttonActive}
        onClick={() => 
        { onCorrectAnswer(answer)
            setColorText("white")
            if(correct_answer === answer){
                setColor("green")}
            else{
                setColor("red") } 
         
        }}
    >
        {answer}
    </button> 
)}