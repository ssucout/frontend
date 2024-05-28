import React from 'react'
import styled from 'styled-components';
import upload_img from '../img/upload_Img.png';
import { useNavigate } from 'react-router-dom';

function FaceMainPage() {
  const navigate = useNavigate();
  return (
    <Background>
        <SmallText>내가 왕이 될 상인가...</SmallText>
        <MainText>내 관상과 어울리는 동아리는?</MainText>
        <UploadImg src={upload_img} >
        </UploadImg>
          <InputBox type="file"></InputBox>
        <InfoText>*얼굴이 잘 나온 정면사진을 한 장만 업로드 해주세요</InfoText>
        <OkayBox onClick={() => navigate('/face/result')}>확인하기</OkayBox>
    </Background>
  )
}

const Background = styled.div`
  text-align: center;
	background-color:#dcd2da;	
	width: 64rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SmallText = styled.div`
  color: #595959;
  font-family: "Pretendard-Bold";
  font-size: 2.25rem;
  padding-top: 6rem;
`;

const MainText = styled.div`
    color: white;
    font-family: "Pretendard-ExtraBold";
    font-size: 4rem;
    font-weight: bolder;
    -webkit-text-stroke: #4F4F4F .100rem;
    padding-top: 1rem;
`;

const UploadImg = styled.img`
    width: 40rem;
    height: 40rem;
    display: flex;
    /* position: relative; */
    /* left: 50%;
    transform: translateX(-50%); */
    margin-top: 1.75rem;

`;
const InputBox = styled.input`
    width: 40rem;
    border: none;
    background-color: white;
    margin-top: 0%;
`;

const InfoText = styled.div`
    color: #7E7E7E;
    font-family: "Pretendard-Bold";
    font-size: 2.25rem;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
`;

const OkayBox = styled.button`
  background-color: #4F4F4F;
  width: 40rem;
  height: 8rem;
  border-radius: 3.125rem;
  font-size: 3.125rem;
  font-weight: 700;
  font-family: "Pretendatd-Bold";
  color: white;
  margin-bottom: 2rem;
`;

export default FaceMainPage