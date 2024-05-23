import React from 'react'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

function Quiz4_2({onAnswer}) {
  const navigate = useNavigate();

  return (
    <Container>
        <QuizNum>4 / 10</QuizNum>
        <QuizSentence>나는</QuizSentence>
        <Buttons>
        <Button onClick={() => navigate('/quiz/result/2d')}>2D가 좋다.</Button>
        <ButtonGap />
        <Button onClick={() => navigate('/quiz/result/2d')}>3D가 좋다.</Button>
        </Buttons>
    </Container>
    
  )
}

const Container = styled.div`
  background-color: #D9D2D8;
    position: absolute;
    width:118.9375rem;
    height: 90rem;
    font-family: "The-Jams";
    font-weight: 500;
`;
const QuizNum = styled.div`
    text-align: center;
    padding-top: 5.625rem;
    font-size: 2.25rem;
    font-weight: 600;
    color: #4F4F4F;
    `;
    const QuizSentence = styled.div`
    text-align: center;
    padding-top: 15rem;
    font-size: 4.5rem;
    color: #656161;
    `;

    const Buttons = styled.div`
    margin-top: 28rem;
    position: absolute;
    transform: translateX(-50%);
    left: 50%;
    `;

    const Button = styled.button`
    color: #818181;
    background-color: white;
    border: none;
    width: 50rem;
    height: 9.375rem;
    font-size: 2rem;
    border-radius: 3.125rem;
    font-family: "The-Jams";
    text-align: center;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    `;

    const ButtonGap = styled.div`
    margin-top: 4.1875rem;
    `;


export default Quiz4_2;