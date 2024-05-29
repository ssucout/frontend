import React from 'react'
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


export default Quiz4_3;