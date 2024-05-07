import React from 'react';
import { useNavigate, BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import './index.css'
import MainPage from './components/MainPage.jsx'
import QuizMainPage from './components/Quiz/QuizMainPage.js';
import Quiz1 from './components/Quiz/Quiz1.js';
import Quiz2 from './components/Quiz/Quiz2.js';
import Quiz3 from './components/Quiz/Quiz3.js';
import Quiz4 from './components/Quiz/Quiz4.js';
import Quiz5 from './components/Quiz/Quiz5.js';
import Quiz6 from './components/Quiz/Quiz6.js';
import Quiz7 from './components/Quiz/Quiz7.js';
import ClubListPage from './components/ClubListPage.js';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/quiz" element={<QuizMainPage />}/>
          <Route path="/quiz/quiz1" element={<Quiz1 />} />          
          <Route path="/quiz/quiz2" element={<Quiz2 />} />          
          <Route path="/quiz/quiz3" element={<Quiz3 />} />    
          <Route path="/quiz/quiz4" element={<Quiz4 />} /> 
          <Route path="/quiz/quiz5" element={<Quiz5 />} />
          <Route path="/quiz/quiz6" element={<Quiz6 />} />          
          <Route path="/quiz/quiz7" element={<Quiz7 />} />          
          <Route path="/clubs" element={<ClubListPage />} />         
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
