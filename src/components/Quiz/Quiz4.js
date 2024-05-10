import React from 'react'
import './Quiz4.css';
//import { useNavigate } from 'react-router-dom';



function Quiz4({onAnswer}) {
    //const navigate = useNavigate();
    return (
        <div className='all'>
        <p className='QuizNum4'>4 / 10</p>
        <h2 className='QuizSentence4'>나는 무대에서</h2>
        <div>
        <button className='button4_1' onClick={() => onAnswer(1, '',true)}>나의 노래/악기 실력을 뽐내고 싶다.</button>
        <br />
        <button className='button4_2' onClick={() => onAnswer(2, '',true)}>기깔난 나의 춤선을 보여주고 싶다.</button>
        <br />
        <button className='button4_3' onClick={() => onAnswer(3, '',true)}>메소드 연기로 다른 사람들에게 감동을 주고 싶다.</button>               
        </div>
    </div>
    )
  }
  
  export default Quiz4;