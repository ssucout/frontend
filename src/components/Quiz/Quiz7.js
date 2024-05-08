import React from 'react'
import './Quiz7.css';
//import { useNavigate } from 'react-router-dom';

function Quiz7({onAnswer}) {
  //const navigate = useNavigate();

  return (
    <div className='all'>
        <p className='QuizNum6'>4 / 10</p>
        <h2 className='QuizSentence6'>내 몸 속에는</h2>
        <div>
        <button className='button7_1' onClick={() => onAnswer(1, '',true)}>이과의 피가 흐른다.</button>
        <br />
        <button className='button7_2' onClick={() => onAnswer(2, '',true)}>수학이 뭐죠? 본투비 문과 !</button>
        </div>
    </div>
    
  )
}

export default Quiz7;