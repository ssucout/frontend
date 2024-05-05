import React from 'react';
import './App.css';
import './index.css'
import MainPage from './components/MainPage.js'
import QuizMainPage from './components/Quiz/QuizMainPage.js';
import Quiz1 from './components/Quiz/Quiz1.js';
import Quiz2 from './components/Quiz/Quiz2.js';
import Quiz3 from './components/Quiz/Quiz3.js';
import ClubListPage from './components/ClubListPage.js';
import { useNavigate, BrowserRouter, Routes, Route } from 'react-router-dom';

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
          <Route path="/clubs" element={<ClubListPage />} />         
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
