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
        <MainText>SSU:Cout가 <br />추천하는 동아리는</MainText>
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
    text-align: center;
`;

const SmallText = styled.p`
  color: #595959;
  font-family: "Pretendard-Bold";
  font-size: 1rem;
  padding-top: 2rem;
  margin-bottom: 0;

  @media (min-width: 768px){
    padding-top: 3rem;
    font-size: 1.75rem;
  }

  @media (min-width: 1200px){
    font-size: 2rem;
  }
`;

const MainText = styled.p`
  color: white;
  font-family: "Pretendard-ExtraBold";
  font-size: 2.5rem;
  font-weight: bolder;
  -webkit-text-stroke: #4F4F4F .075rem;
  margin-top: 0;
  margin-bottom: 1rem;

  @media (min-width: 768px){
    padding-top: 1rem;
    font-size: 3.5rem;
    margin-bottom: 2rem;
  }

  @media (min-width: 1200px){
    font-size: 4rem;
    -webkit-text-stroke: #4F4F4F .1rem;
  }
`;

const ResultBox = styled.div`
    background-color: white;
    display: flex;
    width: 20rem;
    min-height: 20rem;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 2rem;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    padding: 1rem; /* 내용이 ResultBox 안에 위치하도록 패딩 추가 */

    @media (min-width: 768px){
      width: 30rem;
      min-height: 30rem;
    }

    @media (min-width: 1200px){
      width: 40rem;
      min-height: 40rem;
    }
`;

const ResultClubName = styled.div`
  font-size: 2rem;
  font-family: "Pretendard-Bold";
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
  text-align: center;
  color :#4F4F4F;

  @media (min-width: 768px){
    font-size: 2.5rem;
    margin-top: 3rem;
  }

  @media (min-width: 1200px){
    font-size: 3rem;
  }
  
`;

const ResultClubInfo = styled.div`
  font-family: "Pretendard";
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin-left: 2rem;
  margin-right: 2rem;
  font-size: 1rem;
  color: #4F4F4F;

  @media (min-width: 768px){
    font-size: 1.5rem;
  }
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
  font-size: 1rem;

  @media (min-width: 768px){
    font-size: 1.5rem;
  }
`;


const Button = styled.button`
  background-color: #4F4F4F;
  width: 20rem;
  height: 4rem;
  border-radius: 3.125rem;
  font-size: 1.5rem;
  font-weight: 700;
  font-family: "Pretendard-Bold";
  color: white;
  margin-bottom: 2rem;
  border: none;

  @media (min-width: 768px){
    width: 30rem;
    height: 5rem;
  }

  @media (min-width: 1200px){
    width: 40rem;
    height: 6rem;
    font-size: 2rem;
  } 
`;
export default FaceResultPage