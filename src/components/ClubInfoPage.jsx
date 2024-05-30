import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';

function ClubInfoPage() {
    const { state } = useLocation();
    const club = state?.club;
    const [reviews, setReviews] = useState([]);    
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        if (club) {
            console.log(`Fetching reviews for clubId: ${club.clubId}`); // 디버깅을 위한 로그
            axios.get(`http://localhost:8080/review/${club.clubId}`)
                .then(response => {
                    console.log('Response data:', response.data); // 응답 데이터 확인

                    const data = response.data;
                    const reviewsData = data.reviewName || [];                    

                    setReviews(reviewsData);                    
                    setLoading(false); // 데이터가 설정되었음을 표시

                    console.log('전달된 리뷰들:', reviewsData);                    
                    console.log('리뷰 배열 길이:', reviewsData.length);
                })
                .catch(error => {
                    console.error('후기 데이터를 불러오는데 실패했습니다.', error);
                    setLoading(false); // 에러 발생 시 로딩 상태 종료
                });
        }
    }, [club]);

    if (loading) {
        return <div>로딩 중...</div>; // 로딩 중 표시
    }

    if (!club) {
        return <div>동아리 정보를 찾을 수 없습니다.</div>;
    }

    const handleSort = (criteria) => {
        let sortedReviews = [...reviews];
        switch (criteria) {
            case 'oldest':
                sortedReviews.sort((a, b) => new Date(a.writeDate) - new Date(b.writeDate));
                break;
            case 'latest':
                sortedReviews.sort((a, b) => new Date(b.writeDate) - new Date(a.writeDate));
                break;
            case 'highest':
                sortedReviews.sort((a, b) => b.userStar - a.userStar);
                break;
            case 'lowest':
                sortedReviews.sort((a, b) => a.userStar - b.userStar);
                break;
            default:
                break;
        }
        setReviews(sortedReviews);
        setIsModalOpen(false);
    };

    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 !== 0;
        const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

        return (
            <>
                {'★'.repeat(fullStars)}
                {halfStar && '☆'}
                {'☆'.repeat(emptyStars)}
            </>
        );
    };

    return (
        <Container>
            <Title>{club.clubName}</Title>
            <AverageRatingContainer>
                <AverageRating>{club.totalStar}</AverageRating>
                <Stars>{renderStars(club.totalStar)}</Stars>
            </AverageRatingContainer>
            <Header onClick={() => setIsModalOpen(true)}>
                <HeaderText>등록순</HeaderText>
            </Header>
            {isModalOpen && (
                <Modal>
                    <ModalContent>
                        <ModalOption onClick={() => handleSort('oldest')}>등록 오래된 순</ModalOption>
                        <ModalOption onClick={() => handleSort('latest')}>최근 등록 순</ModalOption>
                        <ModalOption onClick={() => handleSort('highest')}>별점 높은 순</ModalOption>
                        <ModalOption onClick={() => handleSort('lowest')}>별점 낮은 순</ModalOption>
                        <ModalClose onClick={() => setIsModalOpen(false)}>닫기</ModalClose>
                    </ModalContent>
                </Modal>
            )}
            <Separator />
            {reviews.length > 0 ? reviews.map((review, index) => (
                <Review key={review.reviewId}>
                    <ReviewHeader>
                        <ReviewYear>{review.userYear}년도 부원</ReviewYear>
                        <ReviewStars>{renderStars(review.userStar)}</ReviewStars>
                    </ReviewHeader>
                    <ReviewContent>{review.reviewContent}</ReviewContent>
                    <ReviewDetail>작성일: {new Date(review.writeDate).toLocaleDateString()}</ReviewDetail>
                </Review>
            )) : (
                <NoReviews>후기가 없습니다.</NoReviews>
            )}
            <ReviewButton onClick={() => navigate(`/clubs/${club.clubId}/review`, { state: { club :club } })}>
                <ReviewButtonText>후기 작성하기</ReviewButtonText>
            </ReviewButton>
        </Container>
    );
}

const Container = styled.div`
    overflow: hidden;
    position: relative;
    width: 1024px;
    height: 1440px;
    background-color: rgba(255, 255, 255, 1);
    padding: 20px;
`;

const Title = styled.div`
    color: rgba(55, 55, 55, 1);
    font-family: Inter;
    font-size: 50px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
`;

const AverageRatingContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
`;

const AverageRating = styled.div`
    font-size: 40px;
    color: rgba(128, 128, 128, 1);
    margin-right: 10px;
`;

const Stars = styled.div`
    font-size: 40px;
    color: rgba(255, 204, 0, 1);
`;

const Header = styled.div`
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: 154px;
    height: 57px;
    background-color:rgba(81.00000277161598, 27.000000290572643, 66.00000366568565, 0.20000000298023224);
    border-radius: 40px;
    display: flex;
    position : relative;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    left : 85%;
`;

const HeaderText = styled.span`
    color: rgba(255, 255, 255, 1);
    font-family: Inter;
    font-size: 24px;
    
`;

const Separator = styled.div`
    border: 1px solid rgba(226, 226, 226, 1);
    margin: 20px 0;
`;

const Review = styled.div`
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid rgba(226, 226, 226, 1);
`;

const ReviewHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
`;

const ReviewYear = styled.div`
    color: rgba(128, 128, 128, 1);
    font-size: 18px;
`;

const ReviewStars = styled.div`
    font-size: 20px;
    color: rgba(255, 204, 0, 1);
`;

const ReviewContent = styled.div`
    font-size: 18px;
    color: rgba(55, 55, 55, 1);
    margin-bottom: 10px;
`;

const ReviewDetail = styled.div`
    font-size: 14px;
    color: rgba(128, 128, 128, 1);
`;

const ReviewButton = styled.div`
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background-color:rgba(81.00000277161598, 27.000000290572643, 66.00000366568565, 0.20000000298023224);
    width: 200px;
    height: 50px;
    border-radius: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin: 20px auto;
`;

const ReviewButtonText = styled.span`
    color: rgba(255, 255, 255, 1);
    font-family: Inter;
    font-size: 20px;
`;

const NoReviews = styled.div`
    color: rgba(128, 128, 128, 1);
    font-family: Inter;
    font-size: 20px;
    text-align: center;
    margin: 50px 0;
`;
const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ModalContent = styled.div`
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ModalOption = styled.button`
    background: none;
    border: none;
    color: black;
    font-size: 18px;
    margin: 10px 0;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`;

const ModalClose = styled.button`
    background: none;
    border: none;
    color: red;
    font-size: 18px;
    margin-top: 20px;
    cursor: pointer;
`;

export default ClubInfoPage;
