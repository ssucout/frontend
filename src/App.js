import React from 'react';
import './App.css';
import './index.css'
import MainPage from './components/MainPage.js'
import QuizMainPage from './components/Quiz/QuizMainPage.js';
import Quiz1 from './components/Quiz/Quiz1.js';
import ClubListPage from './components/ClubListPage.js';
import { useNavigate, BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/quiz" element={<QuizMainPage />}>
            <Route path='/quiz1' element={<Quiz1 />} />
          </Route>
          <Route path="/clubs" element={<ClubListPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
