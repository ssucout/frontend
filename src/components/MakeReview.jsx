import React, { useState } from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

function MakeReview() {
    const { state } = useLocation();
    const club = state?.club;
    const navigate = useNavigate();

    const [review, setReview] = useState("");
    const [rating, setRating] = useState(0);
    const [activityPeriod, setActivityPeriod] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleReviewChange = (e) => {
        setReview(e.target.value);
    };

    const handleRatingChange = (rating) => {
        setRating(rating);
    };

    const handlePeriodSelect = (period) => {
        setActivityPeriod(period);
        setIsModalOpen(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const activityYear = parseInt(activityPeriod.split(' ')[0]);

        const data = {
            content: review,
            userStar: rating,
            userYear: activityYear,
        };
        console.log('데이터 전송: ', data);

        axios.post(`/review/${club.clubId}/write`, data, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => {
                console.log('리뷰가 성공적으로 등록되었습니다:', response.data);
                alert('등록되었습니다!');
                navigate(`/clubs/${club.clubId}`, { state: { club } });
            })
            .catch(error => {
                console.log('리뷰 내용 ', review);
                console.log('리뷰 별점 ', rating);
                console.log('리뷰 활동시기 ', activityPeriod);
                console.error('리뷰 등록에 실패했습니다:', error);
            });
    };

    const renderStars = () => {
        return (
            <>
                {[...Array(5)].map((_, i) => (
                    <Star
                        key={i}
                        selected={i < rating}
                        onClick={() => handleRatingChange(i + 1)}
                    >
                        ★
                    </Star>
                ))}
            </>
        );
    };

    return (
        <Container>
            <ClubName>
                <ClubCategory>{club?.clubCategory} 분과</ClubCategory>{club?.clubName}
            </ClubName>
            <StarRating>{renderStars()}</StarRating>
            <Form onSubmit={handleSubmit}>
                <TextArea
                    placeholder="분위기, 동방, 활동, 등 동아리에 대한 전반적인 리뷰를 남겨주세요."
                    value={review}
                    onChange={handleReviewChange}
                />
                <Label>
                    언제 활동했나요?
                    <SelectButton type= "button" onClick={() => setIsModalOpen(true)}>
                        {activityPeriod || '활동 시기 선택'}
                    </SelectButton>
                </Label>
                <NoteContainer>
                    <Note>* 허위로 후기를 작성할 경우 학교 생활이 어려워질 수 있습니다</Note>
                    <Note>* 수정 및 삭제가 불가능하므로 신중히 작성해주세요</Note>
                    </NoteContainer>
                <SubmitButton type="submit">후기 등록하기</SubmitButton>
            </Form>
            {isModalOpen && (
                <Modal>
                    <ModalContent>
                        {['2021년 1학기', '2021년 2학기', '2022년 1학기', '2022년 2학기', '2023년 1학기', '2023년 2학기', '2024년 1학기'].map((period) => (
                            <ModalOption key={period} onClick={() => handlePeriodSelect(period)}>
                                {period}
                            </ModalOption>
                        ))}
                        <ModalClose onClick={() => setIsModalOpen(false)}>닫기</ModalClose>
                    </ModalContent>
                </Modal>
            )}
        </Container>
    );
}

const Container = styled.div`
    background-color: rgba(255, 255, 255, 1);
    width: 100vw;
    height: 100vh;
    position: relative;
    margin: 0 auto;
    padding: 1.25rem;

    @media (min-width: 768px) {
        width: 100%;
    }

    @media (min-width: 1200px) {
        width: 50%;
        height: 100%;
    }
`;

const ClubCategory = styled.div`
    font-family: "Pretendard-Bold";
    font-size: 1rem;
    color: rgba(128, 128, 128, 1);
    text-align: left;

    @media (min-width: 768px) {
        font-size: 1.25rem;
    }
    @media (min-width: 768px) {
        font-size: 1.5rem;
    }
`;

const ClubName = styled.h2`
    font-family: "Pretendard-Bold";
    font-size: 2rem;
    color: #4F4F4F;
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 1rem;

    @media (min-width: 768px) {
        font-size: 2.5rem;
    }

    @media (min-width: 1200px) {
        margin-top: 1.5rem;
        font-size: 3.5rem;
    }
`;

const StarRating = styled.div`
    font-size: 2rem;
    text-align: center;
    color: rgba(255, 229, 164, 1);

    @media (min-width: 768px) {
        font-size: 2.5rem;
    }

    @media (min-width: 1200px) {
        font-size: 3.125rem;
    }
`;

const Star = styled.span`
    cursor: pointer;
    color: ${({ selected }) => (selected ? 'rgba(255, 204, 0, 1)' : 'rgba(255, 229, 164, 1)')};
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin-top: 1.25rem;
`;

const TextArea = styled.textarea`
    width: 90%;
    height: 15rem;
    resize: none;
    margin-top: 1.25rem;
    padding: 1.25rem;
    border-radius: 0.625rem;
    border: 2px solid rgba(226, 226, 226, 1);
    font-size: 1rem;

    @media (min-width: 768px) {
        width: 90%;
        height: 25rem;
        font-size: 1.25rem;
    }

    @media (min-width: 1200px) {
        width: 100%;
        height: 31.25rem;
    }
`;

const Label = styled.label`
    font-family: "Pretendard";
    font-size: 1rem;
    color: rgba(154, 154, 154, 1);
    text-align: left;
    margin-top: 2rem;

    @media (min-width: 768px) {
        font-size: 1.5rem;
    }

    @media (min-width: 1200px) {
        font-size: 1.875rem;
    }
`;

const SelectButton = styled.button`
    box-shadow: 0rem 0.25rem 0.25rem rgba(0, 0, 0, 0.25);
    width: 8rem;
    height: 2.2rem;
    background-color: rgba(81, 27, 66, 0.2);
    border-radius: 4.375rem;
    color: white;
    font-family: "Pretendard-Bold";
    font-size: 1.0rem;
    border: none;
    cursor: pointer;
    margin-bottom: 1rem;
    margin-left: 1rem;

    @media (min-width: 768px) {
        width: 10rem;
        height: 3rem;
        font-size: 1.2rem;
    }

    @media (min-width: 1200px) {
        width: 12rem;
        height: 3.2rem;
        font-size: 1.4rem;
    }
`;

const NoteContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
`;

const Note = styled.p`
    font-family: "Pretendard";
    font-size: 0.75rem;
    color: rgba(154, 154, 154, 1);
    text-align: left;
    margin-bottom: 0.2rem;

    @media (min-width: 768px) {
        font-size: 1.125rem;
    }

    @media (min-width: 1200px) {
        font-size: 1.25rem;
    }
`;

const SubmitButton = styled.button`
    box-shadow: 0rem 0.25rem 0.25rem rgba(0, 0, 0, 0.25);
    width: 80%;
    height: 4rem;
    background-color: #595959;
    border-radius: 50rem;
    color: rgba(255, 255, 255, 1);
    font-family: "Pretendard-Bold";
    font-size: 1.5rem;
    border: none;
    cursor: pointer;
    margin-top: 2.5rem;
    align-self: center;

    @media (min-width: 768px) {
        width: 60%;
        height: 5rem;
        font-size: 2rem;
        margin-top: 5rem;
    }

    @media (min-width: 1200px) {
        width: 80%;
        height: 6rem;
        font-size: 2.2rem;
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
    align-items: center;
`;

const ModalOption = styled.button`
    background: none;
    border: none;
    color: black;
    font-size: 1rem;
    margin: 0.625rem 0;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }

    @media (min-width: 768px) {
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
`;

export default MakeReview;
