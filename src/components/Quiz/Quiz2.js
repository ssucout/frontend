import React from 'react'
import './Quiz2.css';
import { useNavigate } from 'react-router-dom';



function Quiz2() {
    const navigate = useNavigate();
    return (
        <div className='all'>
        <p className='QuizNum1'>2 / 10</p>
        <h2 className='QuizSentence1'>눈이 오면?</h2>
        <div>
        <button className='button2_1' onClick={() => navigate('/quiz/quiz3')}>봄이 온다.</button>
        <br />
        <button className='button2_2' onClick={() => navigate('/quiz/quiz3')}>물이 된다.</button>
        <br />
        <button className='button2_3' onClick={() => navigate('/quiz/quiz3')}>그에 따른 피해는 없었는지 찾아본다.</button>
        <br />
        <button className='button2_4' onClick={() => navigate('/quiz/quiz3')}>눈에 대해서 사람들과 대화를 나누고 싶다..</button>
        </div>
    </div>
    )
  }
  
  export default Quiz2;