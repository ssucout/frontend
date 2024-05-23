import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import './index.css'
import MainPage from './components/MainPage.jsx'
import QuizMainPage from './components/Quiz/QuizMainPage.jsx';
import FacePage from './components/FaceMainPage.jsx';
import ClubListPage from './components/ClubListPage.js';

import ResultPage from './components/ResultPage.js';
import ResultPage2 from './components/ResultPage2.js';

import ClubInfoPage from './components/ClubInfoPage.jsx';
import MakeReview from './components/MakeReview.jsx';
import ResultNavigator from './components/Quiz/ResultNavigator.jsx';
import QuizNavigator from './components/Quiz/QuizNavigator.jsx';

function App() {
  // const [answers, setAnswers] = useState([]);

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />

          <Route path="/quiz" element={<QuizMainPage />}/>
          <Route path="/face" element={<FacePage />}/>
          <Route path="/quiz/*" element={<QuizNavigator />} />          
          <Route path="/quiz/result/*" element={<ResultNavigator />} />           
          <Route path="/clubs" element={<ClubListPage />} />         
          <Route path="/clubs/*" element={<ClubInfoPage/>}/>
          <Route path="/clubs/*/review" element={<MakeReview/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
