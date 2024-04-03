import React from 'react';
import club_img from '../img/quiz_img.png';
import './QuizMainPage.css';

const QuizMainPage = () => {
  return (
    <div className='all'>
        <p>나와 찰떡인 동아리는 어딜까?</p>
        <h2>SSU:Cout <br /> 동아리 찾기 테스트</h2>
        <img alt="img" src={club_img}></img>
        <button>시작하기</button>
    </div>
  )
}

export default QuizMainPage
