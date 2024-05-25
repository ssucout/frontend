import React from 'react';
import club_img from '../../img/quiz_img.png';
import './QuizMainPage.css';
import { useNavigate } from 'react-router-dom';

function QuizMainPage() {
  const navigate = useNavigate();

  return (
    <div className='all'>
        <p className='p1'>나와 찰떡인 동아리는 어딜까?</p>
        <h2 className='testText'>SSU:Cout <br /> 동아리 찾기 테스트</h2>
        <img alt="img" src={club_img} className='clubMainImg'></img>
        <button className='startButton' onClick={() => navigate('/quiz/quiz1')}>시작하기</button>
    </div>
  )
}

export default QuizMainPage
