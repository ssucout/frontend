import React, {useState } from 'react'
import './MainPage.css';

import MainModal from './MainModal';


//function MainPage() {

import { useNavigate } from 'react-router-dom';

function MainPage() {  
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const navigate = useNavigate();

  const goClubListPage = () => {
    navigate('/clubs');
  }


    return (
      <div className="background"> {}
        <div className="SSUCout"> {}
          <span className="SSUCout_shadow">SSU:Cout</span> {}
          <span className="SSUCout_white">SSU:Cout</span> {}
        </div>
        <span className="welcome_mainscript">숭실대학교 동아리 찾기 서비스에 오신 것을 환영합니다</span> {}
      
        <button className="mainscript_box1_button_position">
          <div className="mainscript_box_text">
            <span onClick={openModal}>나에게 맞는 동아리 찾아보기</span>
            <MainModal isOpen={isModalOpen} closeModal={closeModal} />
            </div>
        </button>

        <button className="mainscript_box3_button_position" onClick={goClubListPage}>     
        
          <span className="mainscript_box_text">동아리 리뷰 살펴보기</span>
        </button> {}
            
        <button className="mainscript_box4_button_position"> {}
          <span className="mainscript_box_text">동아리방 둘러보기</span> {}
        </button>
      </div>
    );
  
}

export default MainPage;