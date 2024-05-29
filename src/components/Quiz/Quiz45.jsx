import React from 'react'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

function Quiz4_5({onAnswer}) {
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
    
  )
}

const Container = styled.div`
background-color: #D9D2D8;
width:100vw;
height: 100vh;
font-family: "The-Jams";
font-weight: 500;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const QuizNum = styled.div`
text-align: center;
font-size: 2.25rem;
font-weight: 600;
color: #4F4F4F;
`;

const QuizSentence = styled.div`
text-align: center;
font-size: 4.5rem;
color: #656161;
margin-top: 12.5rem;
`;

const Buttons = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 4rem;
margin-top: 20rem;
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


export default Quiz4_5;