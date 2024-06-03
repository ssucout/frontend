import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

function Quiz4_2({ onAnswer }) {
  const navigate = useNavigate();

  return (
    <Container>
      <QuizNum>4 / 10</QuizNum>
      <QuizSentence>나는</QuizSentence>
      <Buttons>
        <Button onClick={() => navigate('/quiz/result/2d')}>2D가 좋다.</Button>
        <Button onClick={() => navigate('/quiz/result/3d')}>3D가 좋다.</Button>
      </Buttons>
    </Container>
  );
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
    padding: 2rem;
  }
`;

const QuizNum = styled.div`
  text-align: center;
  font-size: 1rem;
  font-weight: 600;
  color: #4F4F4F;

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }

  @media (min-width: 1200px) {
    font-size: 2.5rem;
  }
`;

const QuizSentence = styled.div`
  text-align: center;
  font-size: 2rem;
  color: #656161;
  margin-top: 3rem;

  @media (min-width: 768px) {
    font-size: 3rem;
    margin-top: 6rem;
  }

  @media (min-width: 1200px) {
    font-size: 3rem;
    margin-top: 4rem;
  }
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 3rem;

  @media (min-width: 768px) {
    margin-top: 6rem;
    gap: 2rem;
  }

  @media (min-width: 1200px) {
    margin-top: 6rem;
    gap: 2rem;
  }
`;

const Button = styled.button`
  color: #818181;
  background-color: white;
  border: none;
  width: 22rem;
  height: 5rem;
  font-size: 1rem;
  border-radius: 3.125rem;
  font-family: "The-Jams";
  text-align: center;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  @media (min-width: 768px) {
    width: 500%;
    height: 6rem;
    font-size: 1.5rem;
  }

  @media (min-width: 1200px) {
    width: 700%;
    height: 6rem;
    font-size: 1.2rem;
  }
`;

export default Quiz4_2;
