import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function Quiz1() {
  const navigate = useNavigate();

  return (
    <Background>
        <QuizNum>1 / 10</QuizNum>
        <QuizSentence>새터에 간 당신, <br /> 옆 자리에 앉은 사람에게</QuizSentence>
        <Buttons>
        <Button>앗 모르는 사람.... 먼저 말을 걸 때까지 기다린다</Button>
        <ButtonGap />
        <Button onClick={() => navigate('/quiz/quiz2')}>처음 만나는 동기...!! 먼저 인사를 건네본다</Button>
        </Buttons>
    </Background>
    
  )
}

const Background = styled.div`
    background-color: #D9D2D8;
    position: absolute;
    width:118.9375rem;
    height: 90rem;
    font-family: "The-Jams";
    font-weight: 500;
`;

const QuizNum = styled.div`
    text-align: center;
    padding-top: 4.375rem;
    font-size: 2.25rem;
    font-weight: 600;
    color: #4F4F4F;
`;

const QuizSentence = styled.div`
    text-align: center;
    padding-top: 18.75rem;
    font-size: 4.5rem;
    color: #656161;
`;

const Buttons = styled.div`
    margin-top: 20rem;
    position: absolute;
    transform: translateX(-50%);
    left: 50%;
`;

const Button = styled.button`
  color: rgb(255, 255, 255);
    background-color: #4F4F4F;
    width: 50rem;
    height: 9.375rem;
    font-size: 2rem;
    border-radius: 3.125rem;
    font-family: "The-Jams";
    text-align: center;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    /* display: flex; */
`;

const ButtonGap = styled.div`
  margin-top: 3.125rem;
`;
export default Quiz1;