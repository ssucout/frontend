import React from 'react'
import styled from 'styled-components'
import ResultVol1Img from '../../img/ResultVol1.png';

function ResultVol1() {
  return (
    <Container>
      <SmallText>나에게 찰떡인 동아리는 뭘까?</SmallText>
        <MainText>SSU:Cout가 추천하는 동아리는</MainText>
          <Box>
            <ResultImage src={ResultVol1Img}></ResultImage>
          </Box>
          <Button>위 동아리 리뷰 보러가기</Button>
    </Container>
  )
}

const Container = styled.div`
    background-color: #D9D2D8;
    position: absolute;
    width:118.9375rem;
    height: 90rem;
    font-family: "Pretendard-Bold";
    font-weight: 500;
`;

const SmallText = styled.div`
  color: #595959;
  margin-top: 8rem;
  text-align : center;
  font-size: 2.25rem;
`;

const MainText = styled.div`
  color: white;
  text-align: center;
  font-size: 3.75rem;
  margin-top: 1.75rem;
  -webkit-text-stroke: #595959 .100rem;
  font-family: "Pretendard-ExtraBold";
`;

const Box = styled.div`
  background-color: white;
  left: 50%;
  width: 54.375rem;
  height: 55rem;
  position: absolute;
  transform: translateX(-50%);
  margin-top: 1.75rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); 
`;

const ResultImage = styled.img`
  width: 50rem;
  height: 45rem;
  margin-top: 4rem;
  /* transform: translateX(-50%); */
  /* left: 100%; */
  position: relative;
  left: 2rem;
`;

const Button = styled.button`
  width: 50rem;
  height: 9rem;
  color: white;
  background-color: #4f4f4f;
  border-radius: 3.125rem;
  bottom: -66%;
  font-size: 3rem;
  font-family: "Pretendard-Bold";
  position: relative;
  left: 50%;
  transform: translate(-50%);
`;

export default ResultVol1