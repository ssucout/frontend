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
        <WelcomeText>숭실대학교 동아리 찾기 서비스에 오신 것을 환영합니다</WelcomeText>
          <SSUCoutShadow>SSU:Cout</SSUCoutShadow>
          <SSUCoutWhite>SSU:Cout</SSUCoutWhite>
        </div>
        <ButtonContainer>
            <Buttons onClick={openModal}>나에게 맞는 동아리 찾아보기</Buttons>
            <ButtonGap />
              <MainModal isOpen={isModalOpen} closeModal={closeModal} />
            <Buttons onClick={goClubListPage}>동아리 리뷰 살펴보기</Buttons>
            <ButtonGap />    
            <Buttons onClick={() => navigate('/map')}>동아리방 둘러보기</Buttons>
        </ButtonContainer>
      </BackGround>
    );
  
}

// const BackGround = styled.div`
//   text-align: center;
//   background-color:#dcd2da;	
//   width:100vw;
//   height:100%;
//   position:absolute;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;
// const WelcomeText = styled.div`
//   color:#595959;
//   width:52.0625rem;
//   height:2.1875rem;
//   position:absolute;
//   margin-top: 8rem;
//   text-align: center;
//   font-size:2rem;
//   letter-spacing:0;
//   left: 50%;
//   transform: translateX(-50%);
//   font-family : "Pretendard-Bold";
//   font-weight: bolder;
// `;

// const ButtonContainer = styled.div`
//   padding-top : 24rem;
// `;

// const ButtonGap = styled.div`
//   padding-bottom: 6.25rem;
// `;

// const SSUCoutShadow = styled.div`
//   color: #C19797;
// 	width:50rem;
// 	height:10.6303rem;
// 	position: absolute;
// 	/* text-align:center; */
// 	font-family: "Inter-Black_Italic";
// 	font-size:9.375rem;
// 	font-weight: 900px;
// 	letter-spacing:0;
//   top : 15rem;
//   left: 50%;
//   transform: translate(-50%, -50%);
// 	-webkit-text-stroke: #6B6B6B .1875rem;
// `;

// const SSUCoutWhite = styled.div`
// 	color:rgba(255, 255, 255, 1);
// 	width:50rem;
// 	height:10.6303rem;
// 	position:absolute;
// 	text-align:center;
// 	font-size:9.375rem;
// 	font-family: "Inter-Black_Italic";
// 	letter-spacing:0;
//   top : 15.8rem;
//   left: 50%;
// 	font-weight: 900px;
//   transform: translate(-50%, -50%);
// 	-webkit-text-stroke: #6B6B6B .1875rem;
// `;


// const Buttons = styled.button`
//   width: 48rem;
//   height: 11rem;
//   border-radius: 6.25rem;
//   font-family : "Pretendard-Bold";
//   font-weight: bolder;
//   background-color: white;
//   border: none;
//   color: #9A8CA3;
//   font-size: 2.5rem;
//   box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); 
// `;

const BackGround = styled.div`
  text-align: center;
  background-color: #dcd2da;
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    height: 100vh;
  }

  @media (min-width: 1200px) {
    height: 100%;
    padding: 1rem;
  }
`;

const WelcomeText = styled.div`
  color: #595959;
  width: 90vw;
  height: 2.1875rem;
  position: relative;
  margin-top: 4rem;
  text-align: center;
  font-size: 1rem;
  letter-spacing: 0;
  font-family: "Pretendard-Bold";
  font-weight: bolder;

  @media (min-width: 768px) {
    width: 80vw;
    font-size: 1.75rem;
  }

  @media (min-width: 1200px) {
    width: 52.0625rem;
    font-size: 2rem;
    margin-top: 4rem;
  }
`;

const ButtonContainer = styled.div`
  padding-top: 0rem;

  @media (min-width: 768px) {
    padding-top: 5rem;
  }

  @media (min-width: 1200px) {
    padding-top: 7rem;
  }
`;

const ButtonGap = styled.div`
  padding-bottom: 2rem;

  @media (min-width: 768px) {
    padding-bottom: 3rem;
  }

  @media (min-width: 1200px) {
    padding-bottom: 3.25rem;
  }
`;

const SSUCoutShadow = styled.div`
  color: #c19797;
  width: 90vw;
  height: 10vh;
  position: relative;
  font-family: "Inter-Black_Italic";
  font-size: 4rem;
  font-weight: 900;
  letter-spacing: 0;
  top: 4rem;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-text-stroke: #6b6b6b 0.1875rem;

  @media (min-width: 768px) {
    width: 80vw;
    font-size: 7.5rem;
    top: 6rem;
  }

  @media (min-width: 1200px) {
    width: 50rem;
    font-size: 9.375rem;
    top: 6rem;
  }
`;

const SSUCoutWhite = styled.div`
  color: rgba(255, 255, 255, 1);
  width: 90vw;
  height: 10vh;
  position: relative;
  text-align: center;
  font-size: 4rem;
  font-family: "Inter-Black_Italic";
  letter-spacing: 0;
  top: -1rem;
  left: 50%;
  font-weight: 900;
  transform: translate(-50%, -50%);
  -webkit-text-stroke: #6b6b6b 0.1875rem;

  @media (min-width: 768px) {
    width: 80vw;
    font-size: 7.5rem;
    top: 1rem;
  }

  @media (min-width: 1200px) {
    width: 50rem;
    font-size: 9.375rem;
    top: 1rem;
  }
`;

const Buttons = styled.button`
  width: 90vw;
  height: 12vh;
  border-radius: 6.25rem;
  font-family: "Pretendard-Bold";
  font-weight: bolder;
  background-color: white;
  border: none;
  color: #9a8ca3;
  font-size: 1.5rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media (min-width: 768px) {
    width: 80vw;
    height: 9rem;
    font-size: 2rem;
  }

  @media (min-width: 1200px) {
    width: 48rem;
    height: 11rem;
    font-size: 2.5rem;
  }
`;


export default MainPage;