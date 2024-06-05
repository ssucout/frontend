import React from 'react'
import styled from 'styled-components'
import ResultActImg from '../../img/ResultAct.png';
import { useNavigate } from 'react-router-dom';
function ResultAct() {
  const navigate = useNavigate();
  return (
    <Container>
      <SmallText>나에게 찰떡인 동아리는 뭘까?</SmallText>
        <MainText>SSU:Cout가 <br />추천하는 동아리는</MainText>
        <ResultImage src={ResultActImg}></ResultImage>
        <Button onClick={() => navigate('/clubs')}>위 동아리 리뷰 보러가기</Button>
    </Container>
  )
}

const Container = styled.div`
    background-color: #D9D2D8;
    width: 100vw;
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
  text-align: center;
  font-size: 1rem;
  margin-top: 1rem;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }

  @media (min-width: 1200px) {
    font-size: 1.5rem;
    margin-top: 3rem;
  }
`;

const MainText = styled.div`
  color: white;
  text-align: center;
  font-size: 2rem;
  font-weight: 1000;
  -webkit-text-stroke: #595959 .0500rem;
  font-family: "Pretendard-ExtraBold";

  @media (min-width: 768px) {
    font-size: 3rem;
    -webkit-text-stroke: #595959 .0750rem;
  }

  @media (min-width: 1200px) {
    font-size: 4rem;
    -webkit-text-stroke: #595959 .10rem;
  }
`;

const ResultImage = styled.img`
  width: 20rem;
  height: 20rem;
  margin-top: 1rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media (min-width: 768px){
    width: 30rem;
    height: 30rem;
  }

  @media (min-width: 1200px){
    width: 38rem;
    height: 38rem;
  }
`;

const Button = styled.button`
  width: 20rem;
  height: 4rem;
  color: white;
  background-color: #4f4f4f;
  border-radius: 3.125rem;
  font-size: 1.25rem;
  font-family: "Pretendard-Bold";
  margin-top: 1.5rem;
  border: none;
  cursor: pointer;

  @media (min-width: 768px){
    width: 30rem;
    height: 5rem;
    font-size: 1.5rem;
  }

  @media (min-width: 1200px){
    width: 38rem;
    height: 6rem;
    font-size: 1.75rem;
    margin-top: 2rem;
  }
`;

export default ResultAct