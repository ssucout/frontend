//0429 추가

import React from 'react'
import './ClubListPage.css';
import ListButton_img from '../img/ListButton.png';

//import { useNavigate } from 'react-router-dom';
// function ClubListPage() {
//     return(
//     <div> ClubListPage </div>
//     );
// }
function ClubListPage(){
    return (

        // <div>
        //     <h1>Contacts</h1>
        //     <input 
        //         name="keyword"
        //         placeholder="동아리 명을 입력하세요">
                
        //     </input>
        // </div>

        <div class="background">
            <div class="background_white"></div>
            <input class="searchbox">
                
            </input>
            <div class="searchimage"></div>
     
            <button class="tab">
                <img src="../img/ListButton.png"></img>
            </button>
            <div class="divide_bar"></div>
           
            <span  class="club_category">종교분과</span>
            <span class="club_name">가톨릭학생회</span>
           
        </div>
  );

}
export default ClubListPage;

