import React, { useState } from 'react';
import styled from 'styled-components';
import Map1F from '../img/Map1F.jpeg'
import Map2F from '../img/Map2F.jpeg'
import Map3F from '../img/Map3F.jpeg'

function MapPage() {
  const [currentMap, setCurrentMap] = useState(Map1F);

  return (
    <Container>
      <SubText>내 동방은 어디일까?</SubText>
      <MainText>동아리방 둘러보기</MainText>
      <FloorBanner>
        <Button onClick={() => setCurrentMap(Map1F)}>1F</Button>
        <Button onClick={() => setCurrentMap(Map2F)}>2F</Button>
        <Button onClick={() => setCurrentMap(Map3F)}>3F</Button>
      </FloorBanner>
      <ImageBox>
        <MapImage src={currentMap}></MapImage>
      </ImageBox>
    </Container>
  )
}

const Container = styled.div`
  background-color: #D9D2D8;
  width: 64rem;
  min-height: 100vh;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SubText = styled.p`
  color: #595959;
  font-size: 2.25rem;
  font-family: "Pretendard-Bold";
  text-align: center;
  margin-top: 5rem;
`;

const MainText = styled.div`
  color: white;
  font-size: 4rem;
  font-family: "Pretendard-ExtraBold";
  -webkit-text-stroke: #6c4e4e .100rem;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); 
  margin-top: -0.5rem;
`;

const FloorBanner = styled.div`
  background-color: #D9D9D9;
  width: 64rem;
  height: 6rem;
  margin-top: 3rem;
  display: flex; /* 플렉스 컨테이너로 설정 */
  flex-direction: row;
  align-items: center; /* 수직 가운데 정렬 */
  /* justify-content: center; */
`;

const Button = styled.p`
  margin: 2rem;
  color: #656565;
  font-size: 2rem;
  font-family: "Pretendard-ExtraBold";
`;

const ImageBox = styled.div`
  background-color: white;
  width: 64rem;
  height: 51.7331rem;
`;

const MapImage = styled.img`
  width: 64rem;
  object-fit:cover
`;

export default MapPage