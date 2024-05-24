import React, { useState } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

function MakeReview() {
    const { state } = useLocation();
    const club = state && state.club;

    const [review, setReview] = useState('');
    const [rating, setRating] = useState(0);

    const handleReviewChange = (e) => {
        setReview(e.target.value);
    }

    const handleRatingChange = (e) => {
        setRating(parseInt(e.target.value));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // 여기서 리뷰와 별점을 서버로 보내는 작업을 수행합니다.
        console.log('리뷰:', review);
        console.log('별점:', rating);
    }

    return (
        <Container>
            <h2>동아리 리뷰 작성</h2>
            {club && (
                <ClubInfo>
                    <h3>{club.name}</h3>
                    <p>카테고리: {club.category}</p>
                    {/* 동아리에 대한 추가 정보 표시 */}
                </ClubInfo>
            )}
            <Form onSubmit={handleSubmit}>
                <Label>
                    리뷰:
                    <TextArea value={review} onChange={handleReviewChange} />
                </Label>
                <Label>
                    별점:
                    <select value={rating} onChange={handleRatingChange}>
                        <option value={0}>별점 선택</option>
                        <option value={1}>⭐</option>
                        <option value={2}>⭐⭐</option>
                        <option value={3}>⭐⭐⭐</option>
                        <option value={4}>⭐⭐⭐⭐</option>
                        <option value={5}>⭐⭐⭐⭐⭐</option>
                    </select>
                </Label>
                <Button type="submit">리뷰 등록</Button>
            </Form>
        </Container>
    );
}

const Container = styled.div`
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
`;

const ClubInfo = styled.div`
    margin-bottom: 20px;
    border-bottom: 1px solid #ccc;
    padding-bottom: 10px;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Label = styled.label`
    margin-bottom: 10px;
`;

const TextArea = styled.textarea`
    width: 100%;
    height: 100px;
    resize: none;
`;

const Button = styled.button`
    width: 150px;
    padding: 10px;
    margin-top: 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;

export default MakeReview;
