import React from 'react';
import club_img from '../../img/quiz_img.png';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function QuizMainPage(){
  const navigate = useNavigate();
  return (
    <Container>
        <SmallText>나와 찰떡인 동아리는 어딜까?</SmallText>
        <MainText>SSU:Cout <br /> 동아리 찾기 테스트</MainText>
        <Image src={club_img}></Image>
        <StartButton onClick={() => navigate('/quiz/quiz1')}>시작하기</StartButton>
    </Container>
  )
}

const Container = styled.div`
  background-color: #D9D2D8;
  position: absolute;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem; /* 패딩을 추가하여 작은 화면에서 내부 요소 간의 여유 공간 확보 */

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const SmallText = styled.div`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 0;
  padding-top: 6.25rem;
  color: #595959;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    padding-top: 3rem;
  }
`;

const MainText = styled.div`
  text-align: center;
  font-size: 5rem;
  margin-top: 0;
  color: #FFFFFF;
  font-weight: 1000;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);  
  -webkit-text-stroke: #4F4F4F .1rem;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Image = styled.img`
  width: 45rem;
  height: 40rem;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 30rem;
    height: auto;
  }

  @media (max-width: 480px) {
    width: 20rem;
  }
`;

const StartButton = styled.button`
  background-color: #4F4F4F;
  width: 50rem;
  height: 9.375rem;
  border-radius: 3.125rem;
  font-size: 3.125rem;
  font-weight: 700;
  font-family: "Pretendatd-Bold";
  color: white;
  margin-top: 2rem;

  @media (max-width: 768px) {
    width: 100%;
    font-size: 2rem;
    height: 7rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
    height: 5rem;
  }
`;

export default QuizMainPage;
