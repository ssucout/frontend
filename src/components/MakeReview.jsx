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

        axios.post(`http://localhost:8080/review/${club.clubId}/write`, data, {
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
                <Note>* 허위로 후기를 작성할 경우 학교 생활이 어려워질 수 있습니다</Note>
                <Note>* 수정 및 삭제가 불가능하므로 신중히 작성해주세요</Note>
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
    width: 64rem;
    height: 90rem;
    position: relative;
    margin: 0 auto;
    padding: 1.25rem;
`;

const ClubCategory = styled.div`
    font-family: Inter;
    font-size: 1.25rem;
    color: rgba(128, 128, 128, 1);
    text-align: left;
`;

const ClubName = styled.h2`
    font-family: Inter;
    font-size: 3.125rem;
    color: rgba(55, 55, 55, 1);
    text-align: center;
`;

const StarRating = styled.div`
    font-size: 3.125rem;
    text-align: center;
    color: rgba(255, 229, 164, 1);
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
    width: 55.625rem;
    height: 31.25rem;
    resize: none;
    margin-top: 1.25rem;
    padding: 1.25rem;
    border-radius: 0.625rem;
    border: 2px solid rgba(226, 226, 226, 1);
    font-size: 1.25rem;
`;

const Label = styled.label`
    font-family: Inter;
    font-size: 1.875rem;
    color: rgba(154, 154, 154, 1);
    text-align: left;
    margin-top: 2.5rem;
`;

const SelectButton = styled.button`
    box-shadow: 0rem 0.25rem 0.25rem rgba(0, 0, 0, 0.25);
    width: 13.75rem;
    height: 4.375rem;
    background-color: rgba(81, 27, 66, 0.2);
    border-radius: 4.375rem;
    color: rgba(255, 255, 255, 1);
    font-family: Inter;
    font-size: 1.875rem;
    border: none;
    cursor: pointer;
    margin-bottom: 1rem;
    margin-left: 2rem;
`;

const Note = styled.p`
    font-family: Inter;
    font-size: 1.25rem;
    color: rgba(154, 154, 154, 1);
    text-align: left;
    margin-top: 1.25rem;
`;

const SubmitButton = styled.button`
    box-shadow: 0rem 0.25rem 0.25rem rgba(0, 0, 0, 0.25);
    width: 25rem;
    height: 4.8175rem;
    background-color: rgba(81, 27, 66, 0.2);
    border-radius: 4.375rem;
    color: rgba(255, 255, 255, 1);
    font-family: Inter;
    font-size: 2.5rem;
    border: none;
    cursor: pointer;
    margin-top: 2.5rem;
    align-self: center;
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
    font-size: 1.125rem;
    margin: 0.625rem 0;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`;

const ModalClose = styled.button`
    background: none;
    border: none;
    color: red;
    font-size: 1.125rem;
    margin-top: 1.25rem;
    cursor: pointer;
`;

export default MakeReview;
