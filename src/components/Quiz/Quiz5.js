import React from 'react'
import './Quiz5.css';
import { useNavigate } from 'react-router-dom';

function Quiz5() {
  const navigate = useNavigate();

  return (
    <div className='all'>
        <p className='QuizNum5'>5 / 10</p>
        <h2 className='QuizSentence5'>나는</h2>
        <div>
        <button className='button5_1' onClick={() => navigate('/quiz/quiz6')}>2D가 좋다.</button>
        <br />
        <button className='button5_2' onClick={() => navigate('/quiz/quiz6')}>3D가 좋다.</button>
        </div>
    </div>
    
  )
}

export default Quiz5;