import React from 'react'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';



function Quiz3() {
    const navigate = useNavigate();
    return (
        <Container>
        <QuizNum>3 / 10</QuizNum>
        <QuizSentence>종강한다면<br />내가 하고싶은 활동은?</QuizSentence>

        <Buttons>
          <ButtonRow>
            <Button onClick={() => navigate('/quiz/quiz4_3')}><ButtonText>나는 다양한<br />봉사활동에 참여하여<br />사회에 도움이 되고 싶다</ButtonText></Button>        
            <Button onClick={() => navigate('/quiz/quiz4_1')}><ButtonText>나는 무언가를<br />열심히 연습해서<br/>무대에 서보고 싶다</ButtonText></Button>
          </ButtonRow>
          <ButtonRow>
            <Button onClick={() => navigate('/quiz/quiz4_2')}><ButtonText>그동안 못 봤던<br />영화나<br />전시회 도장깨기를 한다</ButtonText></Button>    
            <Button onClick={() => navigate('/quiz/quiz4_5')}><ButtonText>종강이 뭐죠..<br />다시 도서관에 가서<br />미래를 위한 공부를 한다</ButtonText></Button>
          </ButtonRow>
          <ButtonRow>
            <Button onClick={() => navigate('/quiz/quiz4_4')}><ButtonText>공부하느라 못했던<br />운동을 하러 간다</ButtonText></Button>
            <Button onClick={() => navigate('/quiz/quiz4_6')}><ButtonText>종교 활동을 통해<br />하나님께 한 발짝<br />더 다가가고 싶다</ButtonText></Button>
          </ButtonRow>
        </Buttons>
       </Container>
    )
  }
  
  const Container = styled.div`
    background-color: #D9D2D8;
    position: absolute;
    /* width: 64rem;   */
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
    padding-top: 5.625rem;
    font-size: 4.5rem;
    color: #656161;
`;

  const Buttons = styled.div`
    margin-top: 5.625rem;
    position: absolute;
    transform: translateX(-50%);
    left: 50%;
  `;

  const ButtonRow = styled.div`
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
  `;

  const Button = styled.button`
    background-color : white;
    color: #818181;
    width: 26.6875rem;
    height: 15.8125rem;
    font-size: 2rem;
    font-family: "The-Jams";
    /* margin-right: 1rem; */
    border-radius: 1.25rem;
    border-width: .3125rem;
    border-color: #939393;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  `;

  const ButtonText = styled.p`
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    text-align: center;
    overflow: hidden;
    margin: 0;
  `;
  export default Quiz3;