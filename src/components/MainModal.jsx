import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';


function MainModal({isOpen, closeModal}) {
  const navigate = useNavigate();
  const QuizPage = () => {
    navigate('/quiz');
  }
  const FacePage = () => {
    navigate('/face');
  }
  return (
    <>
    
    {/* <div style={{ display: isOpen ? "block" : "none" }}> */}
    
    <BackgroundOverlay isOpen={isOpen} onClick={closeModal} />
    <ModalContainer isOpen={isOpen}>        
            <Box>
            <ButtonContainer>
            <ModalText>나에게 맞는 동아리 찾아보기</ModalText>
            <XButton onClick={closeModal}>x</XButton>
            <Button1 onClick={FacePage}>관상으로 <br />나에게 맞는 동아리<br/> 찾으러 가기</Button1>
            <Button2 onClick={QuizPage}>문답으로 <br />나에게 맞는 동아리 <br />찾으러 가기</Button2>

            </ButtonContainer>
            </Box>
            </ModalContainer>    
    </>
  );
}

const BackgroundOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 999;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`;

const ModalContainer = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
`;

const Box = styled.div`
  width: 90vw;
  height: 45vh;
  background-color: white;
  border-radius: 2.5rem;
  position: relative;
  display: flex;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media (min-width: 768px) {
    width: 85vw;
    height: 55vh;
  }

  @media (min-width: 1200px) {
    width: 53rem;
    height: 70vh;
  }
`;

const ModalText = styled.div`
  position: relative;
  font-family: "Pretendard-Bold";
  font-size: 1.5rem;
  top: 2.5rem;
  color: #9a8ca3;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }

  @media (min-width: 1200px) {
    font-size: 3rem;
    top: 3.5rem;
  }
`;

const XButton = styled.button`
  position: relative;
  top: -2rem;
  right: -9rem;
  background-color: white;
  color: #d8d8d8;
  border: none;
  font-size: 1rem;

  @media (min-width: 768px) {
    font-size: 1.75rem;
    top: -3.125rem;
    right: -23rem;
  }

  @media (min-width: 1200px) {
    font-size: 2rem;
    top: -3.125rem;
    right: -23rem;
  }
`;

const Button1 = styled.button`
  position: relative;
  width: 90vw;
  height: 8rem;
  left: 50%;
  border-radius: 3.75rem;
  transform: translateX(-50%);
  background-color: white;
  color: #9b8ba3;
  border-color: #9b8ba3;
  border-width: 0.4rem;
  font-family: "Pretendard-Bold";
  font-size: 1.5rem;
  font-weight: bold;
  top: 0rem;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    width: 80vw;
    height: 9rem;
    font-size: 2rem;
    top: 2rem;
  }

  @media (min-width: 1200px) {
    width: 42.6875rem;
    height: 11.75rem;
    font-size: 2.25rem;
    top: 2rem;
  }
`;

const Button2 = styled.button`
  position: relative;
  width: 90vw;
  height: 8rem;
  left: 50%;
  border-radius: 3.75rem;
  transform: translateX(-50%);
  background-color: #9b8ba3;
  color: white;
  font-family: "Pretendard-Bold";
  font-size: 1.5rem;
  font-weight: bold;
  top: -5%;
  border: none;

  @media (min-width: 768px) {
    width: 80vw;
    height: 9rem;
    font-size: 2rem;
    top: 2rem;
  }

  @media (min-width: 1200px) {
    width: 42.6875rem;
    height: 11.75rem;
    font-size: 2.25rem;
    top: 2rem;
  }
`;

const ButtonContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  left: 50%;
  transform: translateX(-50%);
`;

export default MainModal;
