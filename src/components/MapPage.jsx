import React, { useState } from 'react';
import styled from 'styled-components';
import Map1F from '../img/Map1F.jpeg'
import Map2F from '../img/Map2F.jpeg'
import Map3F from '../img/Map3F.jpeg'

function MapPage() {
  const [currentMap, setCurrentMap] = useState(Map1F);

  return (
    <Container>
      <Content>
        <FloorBanner>
          <Button onClick={() => setCurrentMap(Map1F)}>1F</Button>
          <Button onClick={() => setCurrentMap(Map2F)}>2F</Button>
          <Button onClick={() => setCurrentMap(Map3F)}>3F</Button>
        </FloorBanner>
        <ImageBox>
          <MapImage src={currentMap}></MapImage>
        </ImageBox>
      </Content>
    </Container>
  )
}

const Container = styled.div`
  background-color: #D9D2D8;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FloorBanner = styled.div`
  background-color: #D9D9D9;
  width: 100%;
  display: flex; 
  flex-direction: row;
  align-items: center; 
  justify-content: left;
`;

const Button = styled.p`
  margin: 1rem;
  color: #656565;
  font-size: 1.5rem;
  font-family: "Pretendard-ExtraBold";

  @media (min-width: 768px){
    font-size: 2rem;
    margin: 1.5rem;
  }
`;

const ImageBox = styled.div`
  background-color: white;
  width: 100vw;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MapImage = styled.img`
  justify-content: center;
  width: 100%;
  object-fit: cover;

  @media (min-width: 768px){
    width: 80%;
  }

  @media (min-width: 1200px){
    width: 60%;
  }
`;

export default MapPage;
