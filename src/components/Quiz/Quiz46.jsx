import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function Quiz4_6({onAnswer}) {
  const navigate = useNavigate();

  return (
    <Background>
        <QuizNum>4 / 10</QuizNum>
        <QuizSentence>채플 출석을 다 채운 후 나는</QuizSentence>
        <Buttons>
        <Button onClick={() => navigate('/quiz/result/ch')}>아 8번 다 채웠네 이제 안가도 되겠지 ~?</Button>
        <Button onClick={() => navigate('/quiz/result/ch')}>그래도 채플시간이니까 가서 예배드려야겠다!!</Button>
        </Buttons>
    </Background>
  )
}

const Background = styled.div`
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
  color: rgb(255, 255, 255);
    background-color: #4F4F4F;
    width: 50rem;
    height: 9.375rem;
    font-size: 2rem;
    border-radius: 3.125rem;
    font-family: "The-Jams";
    text-align: center;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    /* display: flex; */
`;

const ButtonGap = styled.div`
  margin-top: 3.125rem;
`;
export default Quiz4_6;