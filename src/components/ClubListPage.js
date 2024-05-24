import React, { useState, useEffect } from 'react';
import './ClubListPage.css';  
import { useNavigate } from 'react-router-dom';  
import { useLocation } from 'react-router-dom';
import axios from 'axios'; //db 연동

function ClubListPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();
    const [club,setClubs] = useState([]); //상태 초기값 빈 배열로 초기화
    // 백엔드에서 동아리 데이터 가져오기    
    const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
    const clubsPerPage = 7; // 페이지당 보여질 동아리 수

    useEffect(() => {
        axios.get('http://localhost:8080/club/list')
            .then(response => {
                setClubs(response.data);  // 데이터를 상태에 저장
            })
            .catch(error => {
                console.error('동아리 데이터를 불러오는데 실패했습니다.', error);
            });
    }, []); // 의존성 배열을 비워 컴포넌트 마운트 시 한 번만 실행

    // 검색어가 변경될 때마다 백엔드에서 필터링된 동아리 목록 가져오기
    useEffect(() => {
        if (searchTerm) {
            axios.get(`http://localhost:8080/club/list/search?term=${searchTerm}`)
                .then(response => {
                    setClubs(response.data);
                    setCurrentPage(1); // 검색 시 첫 페이지로 리셋
                    console.log('검색된 동아리 데이터:', response.data); // 검색 결과 확인
                })
                .catch(error => {
                    console.error('동아리 검색에 실패했습니다.', error);
                });
        } else {
            // 검색어가 없을 때 전체 목록을 다시 가져오기
            axios.get('http://localhost:8080/club/list')
                .then(response => {
                    setClubs(response.data);  // 데이터를 상태에 저장
                })
                .catch(error => {
                    console.error('동아리 데이터를 불러오는데 실패했습니다.', error);
                });
        }
    }, [searchTerm]); // searchTerm이 변경될 때마다 실행

    // const filteredClubs = club.filter(club => 
    //     club.clubName.toLowerCase().includes(searchTerm.toLowerCase())
    // );
    const indexOfLastClub = currentPage * clubsPerPage;
    const indexOfFirstClub = indexOfLastClub - clubsPerPage;
    const currentClubs = club.slice(indexOfFirstClub, indexOfLastClub);
    const paginate = pageNumber => setCurrentPage(pageNumber);


    return (
        <div className="background">
            <div className="background_white"></div>
            <input 
                className="searchbox"
                placeholder="동아리 명을 입력하세요"
                onChange={(term) => {setSearchTerm(term.target.value);                
                }}
            />
            <div className="searchimage"></div>
            
            <span className="empty_space"></span>

            {/* {filteredClubs.map(club => (
                <div key={club.id} className="club_item" onClick={() => navigate(`/clubs/${club.id}`)}>
                    <span className="club_category">{club.category}</span>
                    <span className="club_name">{club.name}</span>
            ))}; */}
            {currentClubs.map(club => (                
                <div key={club.clubId} className="club_item" onClick={() => navigate(`/clubs/${club.clubId}`, {state:{club: club}})}>            
                    <span className="club_category">{club.clubCategory}</span>
                    <span className="club_name">{club.clubName}</span>                    

                    <div className="divide_bar"></div>
                </div>                
            ))}
            
            <div className="pagination">
                {Array.from({ length: Math.ceil(club.length / clubsPerPage) }, (_, i) => (
                    <button 
                        key={i} 
                        onClick={() => paginate(i + 1)} 
                        className={currentPage === i + 1 ? 'active' : ''}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default ClubListPage;

