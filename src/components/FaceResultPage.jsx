import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import image from '../img/Map1F.jpeg'

function FaceResultPage() {
    const navigate = useNavigate();
  return (
    <Container>
        <SmallText>내가 왕이 될 상인가...</SmallText>
        <MainText>SSU:Cout가 추천하는 동아리는</MainText>
        <ResultImg src={image}></ResultImg>
        <Button onClick={() => navigate('/clubs')}>동아리 리뷰 보러 가기</Button>
    </Container>
  )
}

const Container = styled.div`
    background-color:#dcd2da;	
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const SmallText = styled.p`
    color: #595959;
    font-family: "Pretendard-Bold";
    font-size: 2.25rem;
    margin-top: 6rem;
`;

const MainText = styled.p`
    color: white;
    font-family: "Pretendard-ExtraBold";
    font-size: 4rem;
    font-weight: bolder;
    -webkit-text-stroke: #4F4F4F .100rem;
    margin-top: 0;
`;

const ResultImg = styled.img`
    width: 40rem;
    height: 40rem;
    display: flex;
    /* margin-top: 1.75rem; */
    padding-bottom: 3.5rem;
`;

const Button = styled.button`
background-color: #4F4F4F;
  width: 40rem;
  height: 8rem;
  border-radius: 3.125rem;
  font-size: 2.5rem;
  font-weight: 700;
  font-family: "Pretendatd-Bold";
  color: white;
  margin-top: 0;
  margin-bottom: 2rem;
`;
export default FaceResultPage