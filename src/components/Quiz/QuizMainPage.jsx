import React from 'react';
import club_img from '../../img/quiz_img.png';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function QuizMainPage() {
  const navigate = useNavigate();
  return (
    <Container>
      <SmallText>나와 찰떡인 동아리는 어딜까?</SmallText>
      <MainText>SSU:Cout <br /> 동아리 찾기 테스트</MainText>
      <ImageContainer>
        <Image src={club_img} alt="Club Image" />
      </ImageContainer>
      <StartButton onClick={() => navigate('/quiz/quiz1')}>시작하기</StartButton>
    </Container>
  );
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

  @media(min-width: 768px){
    padding: 2rem;
  }
`;

const SmallText = styled.div`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 0;
  color: #595959;
  font-weight: 700;
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const MainText = styled.div`
  text-align: center;
  font-size: 2.5rem;
  margin-top: 0;
  margin-bottom: 1rem;
  color: #FFFFFF;
  font-weight: 1000;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 2px 2px rgba(0, 0, 0, 0.1);
  -webkit-text-stroke: #4F4F4F .05rem;

  @media (min-width: 768px) {
    font-size: 4rem;
    -webkit-text-stroke: #4F4F4F .075rem;
  }


  @media (min-width: 1200px) {
    font-size: 4.5rem;
  }
`;


const ImageContainer = styled.div`
  flex: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 500px;
  aspect-ratio: 4 / 5;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  max-width: 100%;
  max-height: 100%;
`;

const StartButton = styled.button`
  background-color: #4F4F4F;
  width: 80%;
  height: 5rem;
  border-radius: 3.125rem;
  font-size: 2rem;
  font-weight: 700;
  font-family: "Pretendatd-Bold";
  color: white;
  margin-top: 2rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 2px 2px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px){
    width: 60%;
    font-size: 2.5rem;
    height: 7rem;
  }

  @media (min-width: 1200px){
    width: 40%;
    height: 7.5rem;
  }
`;

export default QuizMainPage;
