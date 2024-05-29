import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function ClubInfoPage() {
    const {state} = useLocation();
    const location = useLocation();
    const club = location.state && location.state.club;    
    const navigate = useNavigate();
    // const goMakeReview = () => {
    //     navigate('/review/${club.id}`, {state:{club: club}}');
    // }

    if (!club) {
        return <div>동아리 정보를 찾을 수 없습니다.</div>;
    }

    return (
        <Background>
            <SmallText>{club.name}</SmallText>
            <p>카테고리: {club.category}</p>
            <p>동아리 이름: {club.name}</p>
            {/* 동아리에 대한 다른 정보 표시 */}
            <Buttons onClick={() => navigate(`/clubs/${club.id}/review`, {state:{club: club}})}>동아리 리뷰 작성하기</Buttons>
        </Background>
        // {filteredClubs.map(club => (
        //     <div key={club.id} className="club_item" onClick={() => navigate(`/clubs/${club.id}`, {state:{club: club}})}>
        //         <span className="club_category">{club.category}</span>
        //         <span className="club_name">{club.name}</span>
        //         <div className="divide_bar"></div>
        //     </div>
        // ))}
    );
}

const Background = styled.div`
    text-align: center;
    background-color:rgba(255, 255, 255, 1);
	width:100vw;
	height:100vh;
`;

const SmallText = styled.div`
  color: #595959;
  font-family: "Pretendard-Bold";
  font-size: 2.25rem;
  padding-top: 3.375rem;
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


export default ClubInfoPage;