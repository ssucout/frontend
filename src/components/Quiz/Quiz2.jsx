import React from 'react'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

function Quiz2({onAnswer}) {
    const navigate = useNavigate();
    return (
        <Background>
            <QuizNum2>2 / 10</QuizNum2>
            <QuizSentence2>눈이 오면?</QuizSentence2>
            <Buttons2>
                <Button2 onClick={() => navigate('/quiz/quiz3')}>봄이 온다.</Button2>
                <Button2 onClick={() => navigate('/quiz/quiz3')}>물이 된다.</Button2>
                <Button2 onClick={() => navigate('/quiz/quiz3')}>그에 따른 피해는 없었는지 찾아본다.</Button2>
                <Button2 onClick={() => navigate('/quiz/quiz3')}>눈에 대해서 사람들과 대화를 나누고 싶다..</Button2>
        </Buttons2>
    </Background>
    )
  }
  
  const Background = styled.div`
    background-color: #D9D2D8;
    width:100vw;
    height: 100vh;
    font-family: "The-Jams";
    font-weight: 500;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const QuizNum2 = styled.div`
    font-size: 2.25rem;
    font-weight: 600;
    color: #4F4F4F;
`;

const QuizSentence2 = styled.div`
    text-align: center;
    margin-top: 7rem;
    font-size: 4.5rem;
    color: #656161;
`;

const Buttons2 = styled.div`
    display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem; /* 간격 설정 */
  margin-top: 10rem;
`;

const Button2 = styled.button`
    color: rgb(255, 255, 255);
    background-color: #4F4F4F;
    width: 50rem;
    height: 9.375rem;
    font-size: 2rem;
    border-radius: 3.125rem;
    font-family: "The-Jams";
    text-align: center;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;


  export default Quiz2;