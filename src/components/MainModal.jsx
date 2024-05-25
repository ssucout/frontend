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
    <div style={{ display: isOpen ? "block" : "none" }}>
    {/* <BackgroundOverlay isOpen={isOpen} /> */}
        <div>
            <Box>
            <ButtonContainer>
            <ModalText>나에게 맞는 동아리 찾아보기</ModalText>
            <XButton onClick={closeModal}>x</XButton>
            <Button1 onClick={FacePage}>관상으로 <br />나에게 맞는 동아리<br/> 찾으러 가기</Button1>
            <Button2 onClick={QuizPage}>문답으로 <br />나에게 맞는 동아리 <br />찾으러 가기</Button2>

            </ButtonContainer>
            </Box>
        </div>
    </div>
    </>
  );
}

// const BackgroundOverlay = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background-color: rgba(0, 0, 0, 0.5); /* 반투명한 검은색 배경 */
//   z-index: 999; /* 모달보다 뒤에 위치하도록 설정 */
//   display: ${({ isOpen }) => (isOpen ? 'block' : 'none')}; /* 모달이 열렸을 때만 표시 */
// `;


const Box = styled.div`
  width: 53rem;
  height: 38.8125rem;
  background-color: white;
  border-radius: 2.5rem;

  position: absolute;
  top: 40.5625rem;
  transform: translate(-50%, -50%);
  display: flex;
  left: 50%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

`;

const ModalText = styled.div`
  position: relative;
  font-family: "Pretendard-Bold";
  font-size: 3rem;
  top: 3.5rem;
  color: #9A8CA3;
`;

const XButton = styled.button`
  position: relative;
  top: -3.125rem;
  right: -23rem;
  background-color: white;
  color: #D8D8D8;
  border: none;
  font-size: 2rem;
`;

const Button1 = styled.button`
  position: relative;
  width: 42.6875rem;
  height: 11.75rem;
  left: 50%;
  border-radius: 3.75rem;
  transform: translateX(-50%);
  background-color: white;
  color: #9b8ba3;
  border-color: #9b8ba3;
  border-width: .4rem;
  font-family: "Pretendard-Bold";
  font-size: 2.25rem;
  font-weight: bold;
  top: 2rem;
  margin-bottom: 1rem;
`;

const Button2 = styled.button`
  position: relative;
  width: 42.6875rem;
  height: 11.75rem;
  left: 50%;
  border-radius: 3.75rem;
  transform: translateX(-50%);
  background-color: #9b8ba3;
  color: white;
  font-family: "Pretendard-Bold";
  font-size: 2.25rem;
  font-weight: bold;
  top: 2rem;
  border: none;
  /* padding-top : .625rem; */
`;


const ButtonContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  left: 50%;
  transform: translateX(-50%);
`

export default MainModal