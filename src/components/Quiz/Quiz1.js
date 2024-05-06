import React from 'react'
import './Quiz1.css';
import { useNavigate } from 'react-router-dom';

function Quiz1() {
  const navigate = useNavigate();

  return (
    <div className='all'>
        <p>1 / 10</p>
        <h2>새터에 간 당신, <br /> 옆 자리에 앉은 사람에게</h2>
        <div className='buttons'>
        <button>앗 모르는 사람.... 먼저 말을 걸 때까지 기다린다</button>
        <br />
        <button className='button1_2' onClick={() => navigate('/quiz/quiz2')}>처음 만나는 동기...!! 먼저 인사를 건네본다</button>
        </div>
    </div>
    
  )
}

export default Quiz1;