// import React, { useState } from 'react';
// import styled from 'styled-components';
// import { useLocation } from 'react-router-dom';

// function MakeReview() {
//     const { state } = useLocation();
//     //const club = state && state.club;
//     const club = state?.club;

//     const [review, setReview] = useState('');
//     const [rating, setRating] = useState(0);

//     const handleReviewChange = (e) => {
//         setReview(e.target.value);
//     }

//     const handleRatingChange = (e) => {
//         setRating(parseInt(e.target.value));
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // 여기서 리뷰와 별점을 서버로 보내는 작업을 수행합니다.
//         console.log('리뷰:', review);
//         console.log('별점:', rating);
//     }

//     return (
//         <Container>
//             <h2>동아리 리뷰 작성</h2>
//             {club && (
//                 <ClubInfo>
//                     <h3>{club.clubName}</h3>
//                     <p>카테고리: {club.clubCategory}</p>
//                     {/* 동아리에 대한 추가 정보 표시 */}
//                 </ClubInfo>
//             )}
//             <Form onSubmit={handleSubmit}>
//                 <Label>
//                     리뷰:
//                     <TextArea value={review} onChange={handleReviewChange} />
//                 </Label>
//                 <Label>
//                     별점:
//                     <select value={rating} onChange={handleRatingChange}>
//                         <option value={0}>별점 선택</option>
//                         <option value={1}>⭐</option>
//                         <option value={2}>⭐⭐</option>
//                         <option value={3}>⭐⭐⭐</option>
//                         <option value={4}>⭐⭐⭐⭐</option>
//                         <option value={5}>⭐⭐⭐⭐⭐</option>
//                     </select>
//                 </Label>
//                 <Button type="submit">리뷰 등록</Button>
//             </Form>
//         </Container>
//     );
// }

// const Container = styled.div`
//     max-width: 37.5rem;
//     margin: 0 auto;
//     padding: 20px;
// `;

// const ClubInfo = styled.div`
//     margin-bottom: 20px;
//     border-bottom: 1px solid #ccc;
//     padding-bottom: 10px;
// `;

// const Form = styled.form`
//     display: flex;
//     flex-direction: column;
// `;

// const Label = styled.label`
//     margin-bottom: 10px;
// `;

// const TextArea = styled.textarea`
//     width: 100%;
//     height: 100px;
//     resize: none;
// `;

// const Button = styled.button`
//     width: 150px;
//     padding: 10px;
//     margin-top: 20px;
//     background-color: #007bff;
//     color: #fff;
//     border: none;
//     border-radius: 5px;
//     cursor: pointer;
// `;

// export default MakeReview;
import React, { useState } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function MakeReview() {
    const { state } = useLocation();
    const club = state?.club;

    const [review, setReview] = useState('');
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

        // 서버로 데이터를 전송합니다.
        const data = {
            clubId: club.clubId,
            reviewContent: review,
            userStar: rating,
            userYear: activityPeriod,
        };

        axios.post('http://localhost:8080/review', data)
            .then(response => {
                console.log('리뷰가 성공적으로 등록되었습니다:', response.data);
            })
            .catch(error => {
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
            <ClubCategory>{club?.clubCategory}</ClubCategory>
            <ClubName>{club?.clubName}</ClubName>
            <StarRating>{renderStars()}</StarRating>
            <Form onSubmit={handleSubmit}>
                <TextArea
                    placeholder="분위기, 동방, 활동, 등 동아리에 대한 전반적인 리뷰를 남겨주세요."
                    value={review}
                    onChange={handleReviewChange}
                />
                <Label>
                    언제 활동했나요?
                    <SelectButton onClick={() => setIsModalOpen(true)}>
                        {activityPeriod || '활동 시기 선택'}
                    </SelectButton>
                </Label>
                <Note>* 허위로 후기를 작성할 경우 학고 생활이 어려워질 수 있습니다</Note>
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
    width: 1024px;
    height: 1440px;
    position: relative;
    margin: 0 auto;
    padding: 20px;
`;

const ClubCategory = styled.div`
    font-family: Inter;
    font-size: 20px;
    color: rgba(128, 128, 128, 1);
    text-align: left;
`;

const ClubName = styled.h2`
    font-family: Inter;
    font-size: 50px;
    color: rgba(55, 55, 55, 1);
    text-align: left;
`;

const StarRating = styled.div`
    font-size: 50px;
    color: rgba(255, 229, 164, 1);
`;

const Star = styled.span`
    cursor: pointer;
    color: ${({ selected }) => (selected ? 'rgba(255, 204, 0, 1)' : 'rgba(255, 229, 164, 1)')};
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
`;

const TextArea = styled.textarea`
    width: 890px;
    height: 450px;
    resize: none;
    margin-top: 20px;
    padding: 20px;
    border-radius: 10px;
    border: 2px solid rgba(226, 226, 226, 1);
    font-size: 20px;
`;

const Label = styled.label`
    font-family: Inter;
    font-size: 30px;
    color: rgba(154, 154, 154, 1);
    text-align: left;
    margin-top: 40px;
`;

const SelectButton = styled.button`
    font-family: Inter;
    font-size: 30px;
    color: rgba(154, 154, 154, 1);
    text-align: left;
    border: none;
    background: none;
    cursor: pointer;
`;

const Note = styled.p`
    font-family: Inter;
    font-size: 20px;
    color: rgba(154, 154, 154, 1);
    text-align: left;
    margin-top: 20px;
`;

const SubmitButton = styled.button`
    width: 400px;
    height: 77px;
    background-color: rgba(81, 27, 66, 0.2);
    border-radius: 70px;
    color: rgba(255, 255, 255, 1);
    font-family: Inter;
    font-size: 40px;
    border: none;
    cursor: pointer;
    margin-top: 40px;
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

export default MakeReview;
