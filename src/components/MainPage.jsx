import React, { useState } from 'react';
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
  };

  return (
    <BackGround>
      <MainModal isOpen={isModalOpen} closeModal={closeModal} />
      <div>
        <WelcomeText>숭실대학교 동아리 찾기 서비스에 오신 것을 환영합니다</WelcomeText>
        <TextContainer>
          <SSUCoutShadow>SSU:Cout</SSUCoutShadow>
          <SSUCoutWhite>SSU:Cout</SSUCoutWhite>
        </TextContainer>
      </div>
      <ButtonContainer>
        <Buttons onClick={openModal}>나에게 맞는 동아리 찾아보기</Buttons>
        <MainModal isOpen={isModalOpen} closeModal={closeModal} />
        <Buttons onClick={goClubListPage}>동아리 리뷰 살펴보기</Buttons>
        <Buttons onClick={() => navigate('/map')}>동아리방 둘러보기</Buttons>
      </ButtonContainer>
    </BackGround>
  );
}

const BackGround = styled.div`
  text-align: center;
  background-color: #dcd2da;
  position: absolute;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* padding: 1rem; */

  @media (min-width: 768px) {
    padding: 1rem;
  }
`;

const WelcomeText = styled.div`
  color: #595959;
  text-align: center;
  font-size: 0.8rem;
  letter-spacing: 0;
  font-family: 'Pretendard-Bold';
  font-weight: bolder;

  @media (min-width: 768px) {
    margin-top: 3rem;
    font-size: 1.5rem;
  }

  @media (min-width: 1200px) {
    margin-top: 5rem;
    font-size: 2rem;
  }
`;

const TextContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0;
`;

const SSUCoutShadow = styled.div`
  color: #c19797;
  font-family: 'Inter-Black_Italic';
  font-size: 4rem;
  font-weight: 900;
  letter-spacing: 0;
  -webkit-text-stroke: #6b6b6b 0.08rem;
  position: absolute;
  margin-top: 0;

  @media (min-width: 768px) {
    font-size: 7rem;
    -webkit-text-stroke: #6b6b6b 0.13rem;
  }

  @media (min-width: 1200px) {
    font-size: 10rem;
    -webkit-text-stroke: #6b6b6b 0.15rem;
  }
`;

const SSUCoutWhite = styled.div`
  color: white;
  font-family: 'Inter-Black_Italic';
  font-size: 4rem;
  font-weight: 900;
  letter-spacing: 0;
  position: relative;
  -webkit-text-stroke: #6b6b6b 0.08rem;
  margin-top: 0;
  top: 0.3rem; /* 원하는 거리로 조정 */

  @media (min-width: 768px) {
    font-size: 7rem;
    top: 0.5rem; /* 원하는 거리로 조정 */
    -webkit-text-stroke: #6b6b6b 0.13rem;
  }

  @media (min-width: 1200px) {
    top: 0.7rem;
    font-size: 10rem;
    -webkit-text-stroke: #6b6b6b 0.15rem;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 1.2rem;
  display:flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (min-width: 768px) {
    margin-top: 2rem;
    gap: 2rem;
  }

  @media (min-width: 1200px) {
    margin-top: 3rem;
    gap: 2.5rem;
  }
`;
const Buttons = styled.button`
  width: 20rem;
  height: 5rem;
  border-radius: 6.25rem;
  font-family: 'Pretendard-Bold';
  font-weight: bolder;
  background-color: white;
  border: none;
  color: #9a8ca3;
  font-size: 1.2rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media (min-width: 768px) {
    width: 40rem;
    height: 8rem;
    font-size: 2rem;
  }

  @media (min-width: 1200px) {
    width: 50rem;
    height: 10rem;
    font-size: 2.5rem;
  }
`;

export default MainPage;
