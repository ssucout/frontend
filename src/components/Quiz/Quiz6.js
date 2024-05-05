import React from 'react'
import './Quiz6.css';
import { useNavigate } from 'react-router-dom';

function Quiz6() {
  const navigate = useNavigate();

  return (
    <div className='all'>
        <p className='QuizNum6'>6 / 10</p>
        <h2 className='QuizSentence6'>나는</h2>
        <div>
        <button className='button6_1' onClick={() => navigate('/quiz/quiz7')}>개인의 역량이 중요한 운동이 좋다.</button>
        <br />
        <button className='button6_2' onClick={() => navigate('/quiz/quiz7')}>다른 사람들과 함께 운동하며<br />팀워크를 쌓는게 좋다.</button>
        </div>
    </div>
    
  )
}

export default Quiz6;