import React from 'react'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

function Quiz2({onAnswer}) {
    const navigate = useNavigate();
    return (
        <Background>
            <QuizNum2>2 / 10</QuizNum2>
            <QuizSentence2>눈이 오면?</QuizSentence2>
            <Buttons2>
                <Button2 onClick={() => navigate('/quiz/quiz3')}>봄이 온다.</Button2>
                    <ButtonGap2 />
                <Button2 onClick={() => navigate('/quiz/quiz3')}>물이 된다.</Button2>
                    <ButtonGap2 />
                <Button2 onClick={() => navigate('/quiz/quiz3')}>그에 따른 피해는 없었는지 찾아본다.</Button2>
                    <ButtonGap2 />
                <Button2 onClick={() => navigate('/quiz/quiz3')}>눈에 대해서 사람들과 대화를 나누고 싶다..</Button2>
        </Buttons2>
    </Background>
    )
  }
  
  const Background = styled.div`
    background-color: #D9D2D8;
    position: absolute;
    width:118.9375rem;
    height: 90rem;
    font-family: "The-Jams";
    font-weight: 500;
`;

const QuizNum2 = styled.div`
    text-align: center;
    padding-top: 4.375rem;
    font-size: 2.25rem;
    font-weight: 600;
    color: #4F4F4F;
`;

const QuizSentence2 = styled.div`
    text-align: center;
    padding-top: 18.75rem;
    font-size: 4.5rem;
    color: #656161;
`;

const Buttons2 = styled.div`
    margin-top: 12rem;
    position: absolute;
    transform: translateX(-50%);
    left: 50%;
    /* display: flex;
    justify-content: center; */
`;

const Button2 = styled.button`
    color: rgb(255, 255, 255);
    background-color: #4F4F4F;
    width: 50rem;
    height: 9.375rem;
    font-size: 2rem;
    border-radius: 3.125rem;
    font-family: "The-Jams";
    text-align: center;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

const ButtonGap2 = styled.div`
    margin-top: 2rem;
`;

  export default Quiz2;