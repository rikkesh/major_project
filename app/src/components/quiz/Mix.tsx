import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import { mix } from './Mixdata';
import next from 'next';
const Mix = () => {
  
    let [index,setindex]=useState(0);
    let [question,setQuestion] =useState(mix[index]);
    let [lock,setlock] =useState(false);
    let[score,setscore]=useState(0);
    let[result,setresult]=useState(false);


    let Option1=useRef(null);
    let Option2=useRef(null);
    let Option3=useRef(null);
    let Option4=useRef(null);

    let option_array = [Option1,Option2,Option3,Option4];


      const checkAns = (e,ans) =>{
        if(lock === false) {

            if(question.ans===ans){
                e.target.classList.add("correct");
                setlock(true);
                setscore(prev=>prev+1);
          }
            else{
                e.target.classList.add("wrong");
                setlock(true);
                option_array[question.ans-1].current.classList.add("correct")//not an error

          }
  

        }
        
      }

      const next = () => {
        if (lock===true){
          if(index===mix.length -1){
            setresult(true);
            return 0;
          }
          setindex(++index);
          setQuestion(mix[index]);
          setlock(false);
       option_array.map((option)=>{
        option.current.classList.remove("wrong");
        option.current.classList.remove("correct");

       })
        }
      }

      const reset = () =>{
          setindex(0);
          setQuestion(mix[0]);
          setscore(0);
          setlock(false);
          setresult(false);

      }




  return (
    <Wrapper>
      <div className='container'>
        <h1>Combine Quiz</h1>
        <hr />
        {result?<></>:<><h2>{index+1}.{question.question}</h2>
        <ul>
          <li ref={Option1} onClick={(e)=>{checkAns(e,1)}}>{question.option1}</li>
          <li ref={Option2}onClick={(e)=>{checkAns(e,2)}}>{question.option2}</li>
          <li ref={Option3}onClick={(e)=>{checkAns(e,3)}}>{question.option3}</li>
          <li ref={Option4}onClick={(e)=>{checkAns(e,4)}}>{question.option4}</li>
        </ul>
        <button  onClick={next}>Next</button>
        <div className='index'>{index+1} of {mix.length} questions</div>
        </>}
        {result?<><h2>You Scored {score} out of {mix.length}</h2>
        <button onClick={reset}>Reset</button></>:<></>}
        
        
      </div>
      

    </Wrapper>
  )
}
const Wrapper = styled.section`
.container{
      width:640px;
      margin: auto;
      margin-top:150px;
      backgroung: white;
      color:#262626;
      display: FLEX;
      flex-direction: column;
      gap: 20px;
      border-radius: 10px;
      paddinf:40px m50px;

}
      .container hr{
      height:2px;
      border:none;
      background:#707070;
      }
      .container h2{
      font-size:27px;
      font-weight:500;
      }
      .container  ul li{
      margin-top:5px;
      margin-left:5px;
      display:flex;
      text-align:center;
      align-item:center;
      height:70px;
      paddding-left: 0px;
      border:1px solid #686868;
      border-radius:8px;
      margin-button:20px;
      font-size:20px;
      cursor: pointer;

      }
      .container h1{
      text-align:center;
      font-size:30px;

      }
      .container button{
        margin:auto;
        width:250px;
        height:65px;
        background:#553f9a;
        color:#fff;
        font-size:25px;
        border-radius:25px;

        cursor:pointer;

      }
        .index{
        margin: auto;
        font-size:19px;
        
        }
        .correct{
        background:#07ba63;
        border-color:#00d397;
        }
        .wrong{
        background:#ff5050;
        border-color:#FF4A4A;

        }
      
`
export default Mix