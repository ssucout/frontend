import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function Quiz4_6({onAnswer}) {
  const navigate = useNavigate();

  return (
    <Container>
        <QuizNum>10 / 10</QuizNum>
        <QuizSentence>채플 출석을 다 채운 후 나는</QuizSentence>
        <Buttons>
        <Button onClick={() => navigate('/quiz/result/ch')}>아 8번 다 채웠네 이제 안가도 되겠지 ~?</Button>
        <Button onClick={() => navigate('/quiz/result/ch')}>그래도 채플시간이니까 가서 예배드려야겠다!!</Button>
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
    margin-top: 6rem;
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
    gap: 1rem;
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
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    width: 120%;
    height: 4rem;
    font-size: 1rem;
  }
`;
export default Quiz4_6;