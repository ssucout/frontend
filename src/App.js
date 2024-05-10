import React from 'react';
import { useNavigate, BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import './index.css'
import MainPage from './components/MainPage.jsx'
import QuizMainPage from './components/Quiz/QuizMainPage.jsx';
import FacePage from './components/FaceMainPage.jsx';
import Quiz1 from './components/Quiz/Quiz1.jsx';
import Quiz2 from './components/Quiz/Quiz2.js'; 
import Quiz3 from './components/Quiz/Quiz3.js';
import Quiz4 from './components/Quiz/Quiz4.js';
import Quiz5 from './components/Quiz/Quiz5.js';
import Quiz6 from './components/Quiz/Quiz6.js';
import Quiz7 from './components/Quiz/Quiz7.js';
import ClubListPage from './components/ClubListPage.js';

import QuizNavigator from './components/QuizNavigator.js';

import ResultPage from './components/ResultPage.js';
import ResultPage2 from './components/ResultPage2.js';


function App() {
  // const navigate = useNavigate();
  // const [answers, setAnswers] = useState([]);

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />

          <Route path="/quiz" element={<QuizMainPage />}/>
          <Route path="/face" element={<FacePage />}/>
          {/* <Route path="/quiz/quiz1" element={<Quiz1 />} />          
          <Route path="/quiz/quiz2" element={<Quiz2 />} />          
          <Route path="/quiz/quiz3" element={<Quiz3 />} />    
          <Route path="/quiz/quiz4" element={<Quiz4 />} /> 
          <Route path="/quiz/quiz5" element={<Quiz5 />} />
          <Route path="/quiz/quiz6" element={<Quiz6 />} />          
          <Route path="/quiz/quiz7" element={<Quiz7 />} />  */}
          <Route path="/quiz/*" element={<QuizNavigator />}/>          
          <Route path="/clubs" element={<ClubListPage />} />         
          <Route path="/result" element={<ResultPage />} />
          <Route path="/result2" element={<ResultPage2 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
