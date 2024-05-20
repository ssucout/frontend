import React, { useState } from 'react';
import './ClubListPage.css';  
import { useNavigate } from 'react-router-dom';  

function ClubListPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const clubs = [
        { id: 1, category: "종교분과", name: "가톨릭학생회" },
        { id: 2, category: "스포츠분과", name: "축구동아리" },
        { id: 3, category: "스포츠분과", name: "야구동아리" },
        // 여기에 동아리 추가.
    ];

    const filteredClubs = clubs.filter(club => 
        club.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="background">
            <div className="background_white"></div>
            <input 
                className="searchbox"
                placeholder="동아리 명을 입력하세요"
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="searchimage"></div>
            
            <span className="empty_space"></span>
            {filteredClubs.map(club => (
                <div key={club.id} className="club_item" onClick={() => navigate(`/clubs/${club.id}`, {state:{club: club}})}>
                    <span className="club_category">{club.category}</span>
                    <span className="club_name">{club.name}</span>
                    <div className="divide_bar"></div>
                </div>
            ))}
        </div>
    );
}

export default ClubListPage;

