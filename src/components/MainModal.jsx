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
            <XButton onClick={closeModal}>x</XButton>
              <ModalText>나에게 맞는 동아리 찾아보기</ModalText>
            <ButtonContainer>
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
  position: relative; /* 추가 */
  width: 90%;
  height: auto;
  background-color: white;
  border-radius: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media (min-width: 768px) {
    width: 80%;
    height: auto;
  }

  @media (min-width: 1200px) {
    width: 53rem;
    height: auto;
  }
`;

const ModalText = styled.div`
  position: relative;
  font-family: "Pretendard-Bold";
  font-size: 1.5rem;
  color: #9A8CA3;
  margin-top: 2rem;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }

  @media (min-width: 1200px) {
    font-size: 3rem;
  }
`;

const XButton = styled.button`
  position: absolute; /* 추가 */
  top: 0.5rem; 
  right: 0.5rem; /* 우측에서의 거리 */
  background: none;
  color: #d8d8d8;
  border: none;
  font-size: 1.5rem;

  @media (min-width: 768px){
    font-size: 2rem;
    top: 1rem;
    right: 1rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  width: 100%;

  @media (min-width: 768px){
    gap: 1.5rem;
  }

  @media (min-width: 1200px){
    gap: 2rem;
    margin-top: 2.5rem;
    margin-bottom: 2.5rem;
  }
`;

const Button1 = styled.button`
  width: 90%;
  height: 6rem;
  border-radius: 2rem;
  background-color: white;
  color: #9A8CA3;
  border-color: #9A8CA3;
  border-width: 0.2rem;
  font-family: "Pretendard-Bold";
  font-size: 1.2rem;
  font-weight: bold;
  top: 0rem;

  @media (min-width: 768px) {
    width: 90%;
    height: 9rem;
    font-size: 2rem;
    border-radius: 2.5rem;
  }

  @media (min-width: 1200px) {
    width: 90%;
    height: 11rem;
    font-size: 2.25rem;
    top: 2rem;
    border-width: 0.4rem;
  }
`;

const Button2 = styled.button`
  width: 90%;
  height: 6rem;
  border-radius: 2rem;
  background-color: #9A8CA3;
  color: white;
  font-family: "Pretendard-Bold";
  font-size: 1.2rem;
  font-weight: bold;
  border: none;

  @media (min-width: 768px) {
    height: 9rem;
    font-size: 2rem;
    border-radius: 2.5rem;
  }

  @media (min-width: 1200px) {
    height: 11rem;
    font-size: 2.25rem;
  }
`;

export default MainModal;
