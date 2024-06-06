import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function Quiz23() {
  const navigate = useNavigate();

  return (
    <Container>
        <QuizNum>4 / 10</QuizNum>
        <QuizSentence>오예! 공강이 생겼다</QuizSentence>
        <Buttons>
        <Button onClick={() => navigate('/quiz/quiz24')}>오늘 나온 과제 얼른 끝내버려야겠다</Button>
        <Button onClick={() => navigate('/quiz/quiz24')}>공강엔 놀아야지! PC방 갈 사람~</Button>
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
    font-size: 1rem;
    font-weight: 600;
    color: #4F4F4F;

    @media (min-width: 768px) {
        font-size: 1.5rem;
        /* padding-top: 2rem; */
    }
    @media (min-width: 1200px){
      margin-top: 3rem;
      font-size: 2.5rem;
    }
`;

const QuizSentence = styled.div`
    text-align: center;
    font-size: 2rem;
    color: #656161;
    margin-top: 3rem;

    @media (min-width: 768px){
      margin-top: 6rem;
    }

    @media(min-width: 1200px){
      margin-top: 6rem;
      font-size: 2.5rem;
    }
`;

const Buttons = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  @media (min-width: 768px){
    margin-top: 6rem;
    gap: 1rem;
  }

  @media (min-width: 1200px){
    margin-top: 6rem;
    gap: 2rem;
  }
`;

const Button = styled.button`
  color: rgb(255, 255, 255);
  background-color: #4F4F4F;
  width: 22rem;
  height: 5rem;
  font-size: 1rem;
  border-radius: 3.125rem;
  font-family: "The-Jams";
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border: none;
  cursor: pointer;

  @media (min-width: 768px){
    width: 140%;
    height: 7rem;
    font-size: 1.5rem;
  }

  @media (min-width: 1200px){
    width: 150%;
    height: 7rem;
  }

`;

export default Quiz23;
