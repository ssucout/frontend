import React from 'react'
import styled from 'styled-components'
import ResultMoonImg from '../../img/ResultMoon.png';
import { useNavigate } from 'react-router-dom';

function ResultMoon() {
  const navigate = useNavigate();
  return (
    <Container>
      <SmallText>나에게 찰떡인 동아리는 뭘까?</SmallText>
        <MainText>SSU:Cout가 추천하는 동아리는</MainText>
        <ResultImage src={ResultMoonImg}></ResultImage>
        <Button onClick={() => navigate('/clubs')}>위 동아리 리뷰 보러가기</Button>
    </Container>
  )
}

const Container = styled.div`
    background-color: #D9D2D8;
    width:100vw;
    height: 100vh;
    font-family: "Pretendard-Bold";
    font-weight: 500;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const SmallText = styled.div`
  color: #595959;
  text-align : center;
  font-size: 2.25rem;
  margin-top: 1rem;
`;

const MainText = styled.div`
  color: white;
  text-align: center;
  font-size: 3.75rem;
  margin-top: 0.5rem;
  -webkit-text-stroke: #595959 .100rem;
  font-family: "Pretendard-ExtraBold";
`;

const ResultImage = styled.img`
  width: 48rem;
  height: 48rem;
  margin-top: 1.5rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); 
`;

const Button = styled.button`
  width: 45rem;
  height: 9rem;
  color: white;
  background-color: #4f4f4f;
  border-radius: 3.125rem;
  font-size: 3rem;
  font-family: "Pretendard-Bold";
  margin-top: 3rem;
`;

export default ResultMoon