import React from 'react'
import styled from 'styled-components';

function FaceAnalysis() {
  return (
    <Background>
        <SmallText>내가 왕이 될 상인가...</SmallText>
        <MainText>내 관상과 어울리는 동아리는?</MainText>
        <InputBox></InputBox>
        <InfoText>*얼굴이 잘 나온 정면사진을 한 장만 업로드 해주세요</InfoText>
        <OkayBox>확인하기</OkayBox>
    </Background>
  )
}

const Background = styled.div`
  text-align: center;
	background-color:#dcd2da;	
	width:118.9375rem;
	height:90rem;
	position:absolute;
`;

const SmallText = styled.div`
  color: #595959;
  font-family: "Pretendard-Bold";
  font-size: 2.25rem;
  padding-top: 9.375rem;
`;

const MainText = styled.div`
    color: white;
    font-family: "Pretendard-ExtraBold";
    font-size: 4rem;
    font-weight: bolder;
    -webkit-text-stroke: #4F4F4F .100rem;
    padding-top: 1.75rem;
`;

const InputBox = styled.input`
    width: 50.625rem;
    height: 51.25rem;
    border: none;
    margin-top: 2.375rem;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
`;

const InfoText = styled.div`
    color: #7E7E7E;
    font-family: "Pretendard-Bold";
    font-size: 2.25rem;
    padding-top: 1.75rem;
    padding-bottom: 1.75rem;
`;

const OkayBox = styled.button`
  background-color: #4F4F4F;
  width: 50rem;
  height: 9.375rem;
  /* bottom: -30%; */
  border-radius: 3.125rem;
  font-size: 3.125rem;
  font-weight: 700;
  font-family: "Pretendatd-Bold";
  color: white;
  margin-bottom: 1.25rem;
`;

export default FaceAnalysis