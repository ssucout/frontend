import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

function Quiz4_5({ onAnswer }) {
  const navigate = useNavigate();

  return (
    <Container>
      <QuizNum>4 / 10</QuizNum>
      <QuizSentence>내 몸 속에는</QuizSentence>
      <Buttons>
        <Button onClick={() => navigate('/quiz/result/lee')}>이과의 피가 흐른다</Button>
        <Button onClick={() => navigate('/quiz/result/moon')}>수학이 뭐죠? 본투비 문과 !</Button>
      </Buttons>
    </Container>
  );
}

const Container = styled.div`
  background-color: #d9d2d8;
  width: 100%;
  height: 100vh;
  font-family: 'The-Jams';
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

const QuizNum = styled.div`
  text-align: center;
  font-size: 2.25rem;
  font-weight: 600;
  color: #4f4f4f;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.25rem;
  }
`;

const QuizSentence = styled.div`
  text-align: center;
  font-size: 4.5rem;
  color: #656161;
  margin-top: 12.5rem;

  @media (max-width: 768px) {
    font-size: 3rem;
    margin-top: 6rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
    margin-top: 4rem;
  }
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-top: 20rem;

  @media (max-width: 768px) {
    margin-top: 10rem;
    gap: 2rem;
  }

  @media (max-width: 480px) {
    margin-top: 8rem;
    gap: 1rem;
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
  font-family: 'The-Jams';
  text-align: center;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  @media (max-width: 768px) {
    width: 180%;
    height: 6rem;
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    width: 180%;
    height: 4rem;
    font-size: 1rem;
  }
`;

export default Quiz4_5;
