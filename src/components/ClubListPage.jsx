import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ListButton from '../img/ListButton.png'
import axios from 'axios';

function ClubListPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();
    const [clubs, setClubs] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8080/club/list')
            .then(response => {
                setClubs(response.data);
            })
            .catch(error => {
                console.error('동아리 데이터를 불러오는데 실패했습니다.', error);
            });
    }, []);

    useEffect(() => {
        if (searchTerm) {
            axios.get(`http://localhost:8080/club/list/search?term=${searchTerm}`)
                .then(response => {
                    setClubs(response.data);
                })
                .catch(error => {
                    console.error('동아리 검색에 실패했습니다.', error);
                });
        } else {
            axios.get('http://localhost:8080/club/list')
                .then(response => {
                    setClubs(response.data);
                })
                .catch(error => {
                    console.error('동아리 데이터를 불러오는데 실패했습니다.', error);
                });
        }
    }, [searchTerm]);

    const handleSort = (criteria) => {
        let sortedClubs = [...clubs];
        switch (criteria) {
            case 'name':
                sortedClubs.sort((a, b) => a.clubName.localeCompare(b.clubName));
                break;
            case 'highest':
                sortedClubs.sort((a, b) => b.averageRating - a.averageRating);
                break;
            case 'lowest':
                sortedClubs.sort((a, b) => a.averageRating - b.averageRating);
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
            
            {/* <BackgroundWhite></BackgroundWhite> */}
                <SearchBox
                    placeholder="동아리 명을 입력하세요"
                    onChange={(term) => { setSearchTerm(term.target.value); }}
                />
                <SearchImage src={ListButton} onClick={() => setIsModalOpen(true)}></SearchImage>
            <ClubList>
                {clubs.map(club => (
                    <ClubItem key={club.clubId} onClick={() => navigate(`/clubs/${club.clubId}`, { state: { club: club } })}>
                        <ClubCategory>{club.clubCategory}</ClubCategory>
                        <ClubName>{club.clubName}</ClubName>
                        <ReviewStars>{renderStars(club.totalStar)}</ReviewStars>
                        <DivideBar></DivideBar>
                    </ClubItem>
                ))}
            </ClubList> 
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
    background-color: rgba(80.75, 27.29, 65.78, 0.2);
    width: 100vw;
    height: 20vh;;   
    position: relative;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 1.25rem;
`;
const ClubList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 11.8%;
`;

const SearchBox = styled.input`
    background-color: rgba(255, 255, 255, 1);
    width: 57.9375rem;
    height: 8.5625rem;
    position: absolute;
    top: 4.25rem;
    border-radius: 3.75rem;
    left: 25%;
    border: 0.0625rem solid rgba(255, 255, 255, 0.877);
    margin-bottom: 1.25rem;
    font-size: 2rem;
    line-height: 100;
`;

const SearchImage = styled.img`
    /* background-image: url('../img/ListButton.png'); */
    width: 10.25rem;
    height: 1.25rem;
    position:absolute;
    top: 5rem;
    cursor: pointer;
    margin-left: 1rem;
    z-index: 1;  
    position: relative;
`;

const ClubItem = styled.div`
    cursor: pointer;
    border: 0.0625rem solid #ccc;
    padding: 1.5%;
    flex-direction: column;
`;

const ClubCategory = styled.span`
    color: rgba(0, 0, 0, 1);
    width: 6.25rem;    
    position: absolute;
    font-family: Inter;
    text-align: left;
    font-size: 1.5rem;
    left: 12rem;
    margin-top:1rem;
`;

const ClubName = styled.span`
    color: rgba(0, 0, 0, 1);
    width: 23.8125rem;    
    position: absolute;
    left: 34.375rem;
    font-family: Inter;
    text-align: left;
    font-size: 2.25rem;
    margin-right: 70%;
    flex-direction: column;
`;

const DivideBar = styled.div`
    border: 2px solid rgba(196.16, 196.16, 196.16, 1);
    width: 111.875rem;
    height: 0rem;
    position: relative;
    top: 30%;
    margin: 1.25rem 0;
`;

const ReviewStars = styled.div`
    font-size: 30px;
    color: rgba(255, 204, 0, 1);
    margin-left: 20%;
    
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



export default ClubListPage;
