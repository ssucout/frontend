import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components'

function FaceResultPage(props) {
    const navigate = useNavigate();
    const location = useLocation();
    const data = location.state || {};
  return (
    <Container>
        <SmallText>내가 왕이 될 상인가...</SmallText>
        <MainText>SSU:Cout가 추천하는 동아리는</MainText>
        <ResultBox>
          <ResultClubName>{data.clubName}</ResultClubName>
          <ResultClubInfo>{data.clubInfo}</ResultClubInfo>
          <Text>🤍결과는 재미로만 참고해주세요🤍</Text>
        </ResultBox>
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
    margin-bottom: 2rem;
`;

const ResultBox = styled.div`
    background-color: white;
    width: 40rem;
    height: 40rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 2rem;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

const ResultClubName = styled.div`
  font-size: 4rem;
  font-family: "Pretendard-Bold";
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 4rem;
  margin-bottom: 2rem;
  text-align: center;
  
`;

const ResultClubInfo = styled.div`
  font-family: "Pretendard-Bold";
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin-left: 3rem;
  margin-right: 3rem;
  font-size: 1.5rem;
  color: #4F4F4F;
`;

const Text = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-family: "Pretendard-Bold";
  margin-top: 2rem;
  margin-bottom: 2rem;
  color: #818181;
  font-size: 1.5rem;
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