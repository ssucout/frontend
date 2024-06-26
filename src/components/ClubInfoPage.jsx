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
            axios.get(`/review/${club.clubId}`)
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
            <HeadingBanner>
                <AverageRatingContainer>
                    <AverageRating>{club.totalStar}</AverageRating>
                    <Stars>{renderStars(club.totalStar)}</Stars>
                </AverageRatingContainer>
                <Header onClick={() => setIsModalOpen(true)}> 등록순 </Header>
            </HeadingBanner>
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
                후기 작성하기
            </ReviewButton>
        </Container>
    );
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
    background-color: rgba(255, 255, 255, 1);
    /* margin: 1.25rem; */
    
`;

const Title = styled.div`
    color: rgba(55, 55, 55, 1);
    font-family: "Pretendard-Bold";
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 3rem;

    @media (min-width: 768px) {
        font-size: 3.125rem;
    }

    @media (min-width: 1200px) {
        font-size: 3.75rem;
    }
`;

const AverageRatingContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1.25rem;
`;

const AverageRating = styled.div`
    font-size: 1.5rem;
    color: rgba(128, 128, 128, 1);
    margin-right: 0.625rem;

    @media (min-width: 768px) {
        font-size: 2rem;
    }

    @media (min-width: 1200px) {
        font-size: 3rem;
    }
`;

const Stars = styled.div`
    font-size: 1.5rem;
    color: rgba(255, 204, 0, 1);

    @media (min-width: 768px) {
        font-size: 2rem;
    }

    @media (min-width: 1200px) {
        font-size: 2.5rem;
    }
`;

const HeadingBanner = styled.div`
  display: flex;
  justify-content:row;
  margin-top: 2rem;
  margin-left: 1rem;
`;

const Header = styled.button`
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: 5rem;
    height: 2rem;
    background-color: #D9D2D8;
    border-radius: 2.5rem;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: 1rem;
    cursor: pointer;
    color: white;
    font-family: "Pretendard-Bold";
    font-size: 1rem;

    @media (min-width: 768px){
        width: 5.5rem;
        height: 2.5rem;
    }

    @media (min-width: 1200px){
        width: 6rem;
        height: 2.7rem;
        font-size: 1.2rem;
        margin-right: 1.5rem;
    }
`;

const Separator = styled.div`
    border: 1px solid rgba(226, 226, 226, 1);
    margin: 0 1rem ;
    margin-top: 0rem;
`;

const Review = styled.div`
    margin-bottom: 1.25rem;
    padding-bottom: 1.25rem;
    border-bottom: 0.06rem solid rgba(226, 226, 226, 1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 1rem;
`;

const ReviewHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
    margin-top: 1rem;

    @media (max-width: 480px){
        margin-bottom: 0.3rem;
    }
`;

const ReviewYear = styled.div`
    color: rgba(128, 128, 128, 1);
    font-size: 0.75rem;

    @media (min-width: 768px) {
        font-size: 1.2rem;
    }
    @media (min-width: 1200px) {
        font-size: 1.3rem;
    }
`;

const ReviewStars = styled.div`
    font-size: 1rem;
    color: rgba(255, 204, 0, 1);

    @media (min-width: 768px) {
        font-size: 1.5rem;
    }
    @media (min-width: 1200px) {
        font-size: 2rem;
    }
`;

const ReviewContent = styled.div`
    font-family: "Pretendard";
    font-size: 1rem;
    color: rgba(55, 55, 55, 1);
    margin-bottom: 1.5rem;

    @media (min-width: 768px) {
        font-size: 1.5rem;
        margin-bottom: 1.7rem;
    }
    @media (min-width: 1200px) {
        font-size: 1.5rem;
    }
`;

const ReviewDetail = styled.div`
    font-family: "Pretendard";  
    font-size: 0.75rem;
    color: rgba(128, 128, 128, 1);

    @media (min-width: 768px) {
        font-size: 1rem;
    }
    @media (min-width: 1200px) {
        font-size: 1rem;
    }
`;

const ReviewButton = styled.div`
    box-shadow: 0px 0.25rem 0.25rem rgba(0, 0, 0, 0.25);
    background-color: #4F4F4F;
    width: 12.5rem;
    height: 3.125rem;
    border-radius: 3.125rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: white;
    font-family: "Pretendard-Bold";
    font-size: 1rem;
    position: fixed; /* 위치를 고정 */
    bottom: 2rem; /* 아래에서 2rem */
    left: 50%; /* 수평 중앙 정렬 */
    transform: translateX(-50%); /* 중앙 정렬 보정 */

    @media (min-width: 768px) {
        width: 15rem;
        height: 4rem;
        font-size: 1.5rem;
    }

    @media (min-width: 1200px) {
        width: 19rem;
        height: 4.5rem;
    }
`;


const NoReviews = styled.div`
    color: rgba(128, 128, 128, 1);
    font-family: Inter;
    font-size: 1rem;
    text-align: center;
    margin: 3.125rem 0;

    @media (min-width: 768px) {
        font-size: 1.25rem;
    }
    @media (min-width: 1200px) {
        font-size: 1.5rem;
    }
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
    padding: 1.25rem;
    border-radius: 0.625rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 10rem;
`;

const ModalOption = styled.button`
    background: none;
    border: none;
    color: black;
    font-size: 1rem;
    margin: 0.625rem;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }

    @media (min-width: 768px) {
        font-size: 1.125rem;
    }
    @media (min-width: 1200px) {
        font-size: 1.125rem;
    }
`;

const ModalClose = styled.button`
    background: none;
    border: none;
    color: red;
    font-size: 1rem;
    margin-top: 1.25rem;
    cursor: pointer;

    @media (min-width: 768px) {
        font-size: 1.125rem;
    }
    @media (min-width: 1200px) {
        font-size: 1.125rem;
    }
`;

export default ClubInfoPage;
