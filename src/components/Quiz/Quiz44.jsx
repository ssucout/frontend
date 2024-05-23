import React from 'react'
import styled from 'styled-components';
// import { useNavigate } from 'react-router-dom';

function Quiz4_4() {
  // const navigate = useNavigate();

  return (
    <Container>
        <QuizNum>4 / 10</QuizNum>
        <QuizSentence>나는 운동을 할 때</QuizSentence>
        <Buttons>
        <Button>개인의 역량이 중요한 운동이 좋다</Button>
        <ButtonGap />
        <Button>다른 사람들과 함께 운동하며 <br /> 팀워크를 쌓는게 좋다</Button>
        </Buttons>
    </Container>
    
  )
}

const Container = styled.div`
  background-color: #D9D2D8;
    position: absolute;
    width:118.9375rem;
    height: 90rem;
    font-family: "The-Jams";
    font-weight: 500;
`;
const QuizNum = styled.div`
    text-align: center;
    padding-top: 5.625rem;
    font-size: 2.25rem;
    font-weight: 600;
    color: #4F4F4F;
    `;
    const QuizSentence = styled.div`
    text-align: center;
    padding-top: 15rem;
    font-size: 4.5rem;
    color: #656161;
    `;

    const Buttons = styled.div`
    margin-top: 28rem;
    position: absolute;
    transform: translateX(-50%);
    left: 50%;
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

    const ButtonGap = styled.div`
    margin-top: 4.1875rem;
    `;


export default Quiz4_4;