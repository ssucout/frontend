import React from 'react'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

function Quiz2({ onAnswer }) {
  const navigate = useNavigate();
  return (
    <Background>
      <QuizNum2>2 / 10</QuizNum2>
      <QuizSentence2>눈이 오면?</QuizSentence2>
      <Buttons2>
        <Button2 onClick={() => navigate('/quiz/quiz3')}>봄이 온다.</Button2>
        <Button2 onClick={() => navigate('/quiz/quiz3')}>물이 된다.</Button2>
        <Button2 onClick={() => navigate('/quiz/quiz3')}>그에 따른 피해는 없었는지 찾아본다.</Button2>
        <Button2 onClick={() => navigate('/quiz/quiz3')}>눈에 대해서 사람들과 대화를 나누고 싶다.</Button2>
      </Buttons2>
    </Background>
  )
}

const Background = styled.div`
  background-color: #D9D2D8;
  width: 100vw;
  height: 100vh;
  font-family: "The-Jams";
  font-weight: 500;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const QuizNum2 = styled.div`
  font-size: 2.25rem;
  font-weight: 600;
  color: #4F4F4F;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.25rem;
  }
`;

const QuizSentence2 = styled.div`
  text-align: center;
  margin-top: 7rem;
  font-size: 4.5rem;
  color: #656161;

  @media (max-width: 768px) {
    font-size: 3rem;
    margin-top: 5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
    margin-top: 3rem;
  }
`;

const Buttons2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  margin-top: 10rem;

  @media (max-width: 768px) {
    gap: 1rem;
    margin-top: 5rem;
  }

  @media (max-width: 480px) {
    gap: 0.5rem;
    margin-top: 3rem;
  }
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
  border: none;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 120%;
    font-size: 1.5rem;
    height: 6rem;
  }

  @media (max-width: 480px) {
    width: 120%;
    font-size: 1rem;
    height: 4.5rem;
  }
`;

export default Quiz2;
