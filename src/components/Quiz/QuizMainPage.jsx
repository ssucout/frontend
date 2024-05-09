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
    /* width: 64rem;   */
    width:118.9375rem;
    height: 90rem;
`;

const SmallText = styled.div`
    text-align: center;
    font-size: 200%;
    margin-bottom: 0;
    padding-top: 6.25rem;
    color: #595959;
    font-weight:700;
`;

const MainText = styled.div`
  text-align:center;
  font-size: 500%;
  margin-top:0;
  color:#FFFFFF;
  font-weight: 1000;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);  
  -webkit-text-stroke: #4F4F4F .100rem;
`;

const Image = styled.img`
    width: 850px;
    height: 790px;
    position: relative ;
    margin: 0 auto;
    margin-left : 27.5%;
`;

const StartButton = styled.button`
  background-color: #4F4F4F;
  position: relative;
  left: 50%;
  width: 50rem;
    height: 9.375rem;
  /* left: 50%; */
  bottom: -5%;
  transform: translateX(-50%); 
  border-radius: 3.125rem;
  font-size: 3.125rem;
    font-weight: 700;
  font-family: "Pretendatd-Bold";
  color: white;
`;

export default QuizMainPage
