import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ListButton from '../img/ListButton.png';
import axios from 'axios';

function ClubListPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [clubs, setClubs] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const clubsPerPage = 10; // 페이지당 동아리 수 설정
    const navigate = useNavigate();

    useEffect(() => {
        fetchClubs(currentPage);
    }, []);

    useEffect(() => {
        if (searchTerm) {
            axios.get(`http://localhost:8080/club/list/search?term=${searchTerm}`)
                .then(response => {
                    setClubs(response.data);
                    setHasMore(false); // 검색 결과는 무한 스크롤로 추가되지 않음
                })
                .catch(error => {
                    console.error('동아리 검색에 실패했습니다.', error);
                });
        } else {
            setClubs([]);
            setCurrentPage(1);
            setHasMore(true);
            fetchClubs(1);
        }
    }, [searchTerm]);

    const fetchClubs = useCallback(async (page) => {
        try {
            const response = await axios.get(`http://localhost:8080/club/list?page=${page}&limit=${clubsPerPage}`);
            if (response.data.length === 0) {
                setHasMore(false);
            } else {
                setClubs(prevClubs => {
                    const uniqueClubs = removeDuplicateClubs([...prevClubs, ...response.data]);
                    return uniqueClubs;
                });
            }
        } catch (error) {
            console.error('동아리 데이터를 불러오는데 실패했습니다.', error);
        }
    }, [clubsPerPage]);

    const removeDuplicateClubs = (clubs) => {
        const seen = new Set();
        return clubs.filter(club => {
            const duplicate = seen.has(club.clubId);
            seen.add(club.clubId);
            return !duplicate;
        });
    };

    const handleScroll = useCallback(() => {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || !hasMore) {
            return;
        }
        setCurrentPage(prevPage => prevPage + 1);
    }, [hasMore]);

    useEffect(() => {
        if (currentPage > 1) {
            fetchClubs(currentPage);
        }
    }, [currentPage, fetchClubs]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    const handleSort = (criteria) => {
        let sortedClubs = [...clubs];
        switch (criteria) {
            case 'name':
                sortedClubs.sort((a, b) => a.clubName.localeCompare(b.clubName));
                break;
            case 'highest':
                sortedClubs.sort((a, b) => b.totalStar - a.totalStar);
                break;
            case 'lowest':
                sortedClubs.sort((a, b) => a.totalStar - b.totalStar);
                break;
            default:
                break;
        }
        setClubs(sortedClubs);
        setIsModalOpen(false);
    };

    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 !== 0;
        const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

        return (
            <ReviewStars>
                {'★'.repeat(fullStars)}
                {halfStar && '☆'}
                {'☆'.repeat(emptyStars)}
            </ReviewStars>
        );
    };

    return (
        <Background>
            <SearchContainer>
                <SearchBox
                    placeholder="동아리 명을 입력하세요"
                    onChange={(term) => { setSearchTerm(term.target.value); }}
                />
                <SearchImage src={ListButton} onClick={() => setIsModalOpen(true)} />
            </SearchContainer>
            <ClubListBox>
                {clubs.map((club) => (
                    <ClubItem key={club.clubId} onClick={() => navigate(`/clubs/${club.clubId}`, { state: { club: club } })}>
                        <ClubCategory>{club.clubCategory}</ClubCategory>
                        <ClubName>{club.clubName}</ClubName>
                        <ReviewStars>{renderStars(club.totalStar)}</ReviewStars>
                    </ClubItem>
                ))}
            </ClubListBox>
            {isModalOpen && (
                <Modal>
                    <ModalContent>
                        <ModalOption onClick={() => handleSort('name')}>동아리 이름 순</ModalOption>
                        <ModalOption onClick={() => handleSort('highest')}>별점 높은 순</ModalOption>
                        <ModalOption onClick={() => handleSort('lowest')}>별점 낮은 순</ModalOption>
                        <ModalClose onClick={() => setIsModalOpen(false)}>닫기</ModalClose>
                    </ModalContent>
                </Modal>
            )}
        </Background>
    );
}

const Background = styled.div`
    background-color: #D9D2D8;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto; /* 스크롤 가능하게 설정 */
`;

const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 1rem;
    width: 80%;
`;

const SearchBox = styled.input`
    background-color: white;
    width: 100%;
    height: 3rem;
    border-radius: 1.5rem;
    border: none;
    font-size: 0.8rem;

    @media (min-width: 768px){
        height: 4rem;
        font-size: 1rem;
    }
    @media (min-width: 1200px){
        height: 5.5rem;
        font-size: 1.2rem;
    }
`;

const SearchImage = styled.img`
    width: 2rem;
    height: 2rem;
    margin-left: -3rem;
    cursor: pointer;
    /* z-index: 1; */

    @media (min-width: 768px){
        width: 2.2rem;
        height: 2.2rem;
    }

    @media (min-width: 1200px){
        width: 2.5rem;
        height: 2.5rem;
        margin-left: -4rem;
    }
`;

const ClubListBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    width: 80%;
    margin-top: 1rem; /* 검색 박스와 리스트 간의 간격 */
    border-radius: 1rem; /* Add border-radius here */
    padding: 1rem; /* Add padding for better appearance */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Optional: add shadow for better look */
`;


const ClubItem = styled.div`
    cursor: pointer;
    border: 0.0625rem solid #ccc;
    border-radius: 1rem; /* Add border-radius here */
    padding: 1.5%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 95%;
    margin-top: 0.5rem; /* Adjust margin as needed */
    margin-right: 1rem;
    margin-left : 1rem;
    background-color: #fff; /* Optional: add background color */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Optional: add shadow for better look */
`;

const ClubCategory = styled.div`
    color: #4F4F4F;
    font-family: "Pretendard";
    text-align: left;
    font-size: 0.5rem;

    @media (min-width: 768px){
        font-size: 0.8rem;
    }

    @media (min-width: 1200px){
        font-size: 1rem;
    }
`;

const ClubName = styled.div`
    color: rgba(0, 0, 0, 1);
    font-family: "Pretendard";
    text-align: left;
    flex-grow: 1;
    margin-left: 1rem;
    font-size: 0.8rem;

    @media (min-width: 768px){
        font-size: 1rem;
    }

    @media (min-width: 1200px){
        font-size: 1.2rem;
    }
`;

const ReviewStars = styled.div`
    font-size: 1rem;
    color: rgba(255, 204, 0, 1);

    @media (min-width: 768px){
        font-size: 1.5rem;
    }

    @media (min-width: 1200px){
        font-size: 1.8rem;
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
        color: blue;
    }
`;

const ModalClose = styled.button`
    background: none;
    border: none;
    color: red;
    font-size: 18px;
    margin-top: 20px;
    cursor: pointer;
    &:hover {
        color: darkred;
    }
`;

export default ClubListPage;
