import React from 'react'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

function Quiz5({ onAnswer }) {
  const navigate = useNavigate();

  return (
    <Container>
      <QuizNum>5 / 10</QuizNum>
      <QuizSentence>나는 클래식 음악을 들으면</QuizSentence>
      <Buttons>
        <Button onClick={() => navigate('/quiz/result/mu1')}>힐링된다</Button>
        <Button onClick={() => navigate('/quiz/result/mu2')}>졸리다</Button>
      </Buttons>
    </Container>
  )
}

const Container = styled.div`
  background-color: #D9D2D8;
  width: 100vw;
  height: 100vh;
  font-family: "The-Jams";
  font-weight: 500;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  

  @media (min-width: 768px) {
    padding: 1rem;
  }
`;

const QuizNum = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: #4F4F4F;

  @media (min-width: 768px) {
    font-size: 2rem;
  }

  @media (min-width: 1200px) {
    font-size: 2rem;
  }
`;

const QuizSentence = styled.div`
  text-align: center;
  font-size: 2rem;
  color: #656161;
  margin-top: 6rem;

  @media (min-width: 768px) {
    font-size: 3rem;
    margin-top: 6rem;
  }

  @media (min-width: 1200px) {
    font-size: 3rem;
    margin-top: 6rem;
  }
`;

const Buttons = styled.div`
  margin-top: 6rem;
  display: flex;
  flex-direction: column;
  width: 15rem;
  height: 7.8125rem;
  align-items: center;
  gap: 1rem; /* 간격 설정 */

  @media (min-width: 768px) {
    margin-top: 6rem;
    gap: 2rem;
  }

  @media (min-width: 1200px) {
    margin-top: 6rem;
    gap: 4rem;
  }
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

  @media (max-width: 768px) {
    width: 140%;
    height: 6rem;
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    width: 140%;
    height: 4rem;
    font-size: 1.2rem;
  }
`;

export default Quiz5;
