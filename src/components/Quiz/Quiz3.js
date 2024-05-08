import React from 'react'
import './Quiz3.css';
//import { useNavigate } from 'react-router-dom';



function Quiz3({onAnswer}) {
    //const navigate = useNavigate();
    return (
        <div className='all'>
        <p className='QuizNum3'>3 / 10</p>
        <h2 className='QuizSentence3'>종강한다면<br />내가 하고싶은 활동은?</h2>

        <div>
        <button className='button3_1' onClick={() => onAnswer(1, '/quiz/quiz4')}>나는 다양한<br />봉사활동에 참여하여<br />사회에 도움이 되고 싶다</button>        
        <button className='button3_2' onClick={() => onAnswer(2, '/quiz/quiz4')}>나는 무언가를<br />열심히 연습해서<br/>무대에 서보고 싶다</button>
        <br />
        <button className='button3_3' onClick={() => onAnswer(3, '/quiz/quiz5')}>그동안 못 봤던<br />영화나<br />전시회 도장깨기를 한다</button>    
        <button className='button3_4' onClick={() => onAnswer(4, '/quiz/quiz7')}>종강이 뭐죠..<br />다시 도서관에 가서<br />미래를 위한 공부를 한다</button>
        <br />
        <button className='button3_5' onClick={() => onAnswer(5, '/quiz/quiz6')}>공부하느라 못했던<br />운동을 하러 간다</button>
        <button className='button3_6' onClick={() => onAnswer(6, '/quiz/quiz4')}>종교 활동을 통해<br />하나님께 한 발짝<br />더 다가가고 싶다</button>
        </div>
    </div>
    )
  }
  
  export default Quiz3;