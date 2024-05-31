import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function Quiz1() {
  const navigate = useNavigate();

  return (
    <Container>
        <QuizNum>1 / 10</QuizNum>
        <QuizSentence>새터에 간 당신, <br /> 옆 자리에 앉은 사람에게</QuizSentence>
        <Buttons>
        <Button onClick={() => navigate('/quiz/quiz2')}>앗 모르는 사람.... 먼저 말을 걸 때까지 기다린다</Button>
        <Button onClick={() => navigate('/quiz/quiz2')}>처음 만나는 동기...!! 먼저 인사를 건네본다</Button>
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
    padding: 1rem;

    @media (max-width: 768px) {
        padding: 2rem;
    }
`;

const QuizNum = styled.div`
    font-size: 2.25rem;
    font-weight: 600;
    color: #4F4F4F;

    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
`;

const QuizSentence = styled.div`
    text-align: center;
    font-size: 4.5rem;
    color: #656161;
    margin-top: 15rem;

    @media (max-width: 768px) {
        font-size: 3rem;
        margin-top: 10rem;
    }

    @media (max-width: 480px) {
        font-size: 2rem;
        margin-top: 5rem;
    }
`;

const Buttons = styled.div`
  margin-top: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    margin-top: 10rem;
    gap: 0.5rem;
  }

  @media (max-width: 480px) {
    margin-top: 5rem;
    gap: 0.25rem;
  }
`;

const Button = styled.button`
  color: rgb(255, 255, 255);
  background-color: #4F4F4F;
  width: 50rem;
  height: 9.375rem;
  font-size: 2rem;
  border-radius: 3.125rem;
  font-family: "The-Jams";
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border: none;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 120%;
    font-size: 1.5rem;
    height: 7rem;
  }

  @media (max-width: 480px) {
    width: 120%;
    font-size: 1rem;
    height: 5rem;
  }
`;

export default Quiz1;
