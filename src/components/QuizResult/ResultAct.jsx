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

    @media (min-width: 768px) {
        height: auto;
        padding: 2rem 1rem;
    }
`;

const SmallText = styled.div`
  color: #595959;
  text-align: center;
  font-size: 2.25rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const MainText = styled.div`
  color: white;
  text-align: center;
  font-size: 3rem;
  margin-top: 0.5rem;
  -webkit-text-stroke: #595959 .100rem;
  font-family: "Pretendard-ExtraBold";

  @media (max-width: 768px) {
    font-size: 2.75rem;
  }

  @media (max-width: 480px) {
    font-size: 1.75rem;
    -webkit-text-stroke: #595959 .0750rem;
  }
`;

const ResultImage = styled.img`
  width: 45rem;
  height: 45rem;
  margin-top: 1.5rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media (max-width: 1024px) {
    width: 30rem;
    height: 30rem;
  }

  @media (max-width: 768px) {
    width: 24rem;
    height: 24rem;
  }

  @media (max-width: 480px) {
    width: 18rem;
    height: 18rem;
  }
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
  border: none;
  cursor: pointer;

  @media (max-width: 1024px) {
    width: 36rem;
    height: 6rem;
    font-size: 2rem;
  }

  @media (max-width: 768px) {
    width: 24rem;
    height: 5rem;
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    width: 18rem;
    height: 4rem;
    font-size: 1rem;
  }
`;

export default ResultAct