import React, {useState } from 'react'
import MainModal from './MainModal';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function MainPage() {  
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const navigate = useNavigate();

  const goClubListPage = () => {
    navigate('/clubs');
  }
    return (
      <BackGround>
      <MainModal isOpen={isModalOpen} closeModal={closeModal} /> {/* 모달을 바깥으로 이동 */}
        <div>
          <SSUCoutShadow>SSU:Cout</SSUCoutShadow>
          <SSUCoutWhite>SSU:Cout</SSUCoutWhite>
        </div>
        <WelcomeText>숭실대학교 동아리 찾기 서비스에 오신 것을 환영합니다</WelcomeText>
        <ButtonContainer>
            <Buttons onClick={openModal}>나에게 맞는 동아리 찾아보기</Buttons>
            <ButtonGap />
              <MainModal isOpen={isModalOpen} closeModal={closeModal} />
            <Buttons onClick={goClubListPage}>동아리 리뷰 살펴보기</Buttons>
            <ButtonGap />    
            <Buttons>동아리방 둘러보기</Buttons>
        </ButtonContainer>
      </BackGround>
    );
  
}

const ButtonContainer = styled.div`
  padding-top : 30rem;
`;

const ButtonGap = styled.div`
  padding-bottom: 6.25rem;
`;

const SSUCoutShadow = styled.div`
  color: #C19797;
	width:50rem;
	height:10.6303rem;
	position: absolute;
	text-align:center;
	font-family: "Inter-Black_Italic";
	font-size:9.375rem;
	font-weight: 900px;
	letter-spacing:0;
  top : 19.2rem;
  left: 50%;
  transform: translate(-50%, -50%);
	-webkit-text-stroke: #6B6B6B .1875rem;
`;

const SSUCoutWhite = styled.div`
	color:rgba(255, 255, 255, 1);
	width:50rem;
	height:10.6303rem;
	position:absolute;
	text-align:center;
	font-size:9.375rem;
	font-family: "Inter-Black_Italic";
	letter-spacing:0;
  top : 20rem;
  left: 50%;
	font-weight: 900px;
  transform: translate(-50%, -50%);
	-webkit-text-stroke: #6B6B6B .1875rem;
`;

const WelcomeText = styled.div`
  color:#595959;
	width:52.0625rem;
	height:2.1875rem;
	position:absolute;
	top: 10rem;
	font-family:Inter;
	text-align: center;
	font-size:2rem;
	letter-spacing:0;
  left: 50%;
  transform: translateX(-50%);
	font-family : "Pretendard";
  font-weight: bolder;
`;

const Buttons = styled.button`
  width: 48rem;
  height: 11rem;
  border-radius: 6.25rem;
  font-family : "Pretendard-Bold";
  font-weight: bolder;
  background-color: white;
  border: none;
  color: #9A8CA3;
  font-size: 2.5rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); 
`;

const BackGround = styled.div`
  text-align: center;
	background-color:#dcd2da;	
	width:118.9375rem;
	height:90rem;
	position:absolute;
`;

export default MainPage;