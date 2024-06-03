import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

function Quiz4_3() {
  const navigate = useNavigate();

  return (
    <Container>
      <QuizNum>4 / 10</QuizNum>
      <QuizSentence>내가 선호하는 봉사활동은</QuizSentence>
      <Buttons>
        <Button onClick={() => navigate('/quiz/result/vol2')}>행사 staff, 줍깅과 같은 일회성 봉사</Button>
        <Button onClick={() => navigate('/quiz/result/vol1')}>교육 봉사와 같은 정기 봉사</Button>
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
    font-size: 1.5rem;
  }

  @media (min-width: 1200px) {
    margin-top: 3rem;
    font-size: 2.5rem;
  }
`;

const QuizSentence = styled.div`
  text-align: center;
  font-size: 2rem;
  color: #656161;
  margin-top: 3rem;

  @media (min-width: 768px) {
    font-size: 2rem;
    margin-top: 6rem;
  }

  @media (min-width: 1200px) {
    font-size: 2.5rem;
    margin-top: 6rem;
  }
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-top: 3rem;

  @media (min-width: 768px) {
    margin-top: 10rem;
    gap: 2rem;
  }

  @media (min-width: 1200px) {
    margin-top: 8rem;
    gap: 2rem;
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
    width: 120%;
    height: 6rem;
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    width: 140%;
    height: 4rem;
    font-size: 1rem;
  }
`;

export default Quiz4_3;
