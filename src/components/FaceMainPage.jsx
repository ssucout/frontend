import React, { useState } from 'react';
import styled from 'styled-components';
import upload_img from '../img/upload_Img.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function FaceMainPage() {
  const [selectedFile, setSelectedFile] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("파일을 선택해 주세요!");
      return;
    }
    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await axios.post('http://localhost:8080/face', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('파일 업로드 성공:', response.data);
      // 서버 응답에 따라 결과 페이지로 이동
      navigate('/face/result');
    } catch (error) {
      console.error('파일 업로드 실패:', error);
      alert('파일 업로드에 실패했습니다.');
    }
  };

  return (
    <Background>
      <SmallText>내가 왕이 될 상인가...</SmallText>
      <MainText>내 관상과 어울리는 동아리는?</MainText>
      <UploadImg src={upload_img} />
      <InputBox type="file" onChange={handleFileChange} />
      <InfoText>*얼굴이 잘 나온 정면사진을 한 장만 업로드 해주세요</InfoText>
      <OkayBox onClick={handleUpload}>확인하기</OkayBox>
    </Background>
  );
}

const Background = styled.div`
  text-align: center;
  background-color:#dcd2da;	
  width: 100vw;
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
  font-family: "Pretendard-Bold";
  color: white;
  margin-bottom: 2rem;
`;

export default FaceMainPage;
