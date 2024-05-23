import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import './index.css'
import MainPage from './components/MainPage.jsx'
import QuizMainPage from './components/Quiz/QuizMainPage.jsx';
import FacePage from './components/FaceMainPage.jsx';
import Quiz1 from './components/Quiz/Quiz1.jsx';
import Quiz2 from './components/Quiz/Quiz2.jsx'; 
import Quiz3 from './components/Quiz/Quiz3.jsx';
import Quiz41 from './components/Quiz/Quiz41.jsx';
import Quiz42 from './components/Quiz/Quiz42.jsx';
import Quiz43 from './components/Quiz/Quiz43.jsx';
import Quiz44 from './components/Quiz/Quiz44.jsx';
import Quiz45 from './components/Quiz/Quiz45.jsx';
import Quiz46 from './components/Quiz/Quiz46.jsx';
import Quiz5 from './components/Quiz/Quiz5.jsx';
import ClubListPage from './components/ClubListPage.js';

import ResultPage from './components/ResultPage.js';
import ResultPage2 from './components/ResultPage2.js';

import ClubInfoPage from './components/ClubInfoPage.jsx';
import MakeReview from './components/MakeReview.jsx';

function App() {
  // const [answers, setAnswers] = useState([]);

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />

          <Route path="/quiz" element={<QuizMainPage />}/>
          <Route path="/face" element={<FacePage />}/>
          <Route path="/quiz/quiz1" element={<Quiz1 />} />          
          <Route path="/quiz/quiz2" element={<Quiz2 />} />          
          <Route path="/quiz/quiz3" element={<Quiz3 />} /> 
          <Route path="/quiz/quiz4_1" element={<Quiz41 />} />
          <Route path="/quiz/quiz4_2" element={<Quiz42 />} />
          <Route path="/quiz/quiz4_3" element={<Quiz43 />} />
          <Route path="/quiz/quiz4_4" element={<Quiz44 />} />
          <Route path="/quiz/quiz4_5" element={<Quiz45 />} /> 
          <Route path="/quiz/quiz4_6" element={<Quiz46 />} />
          <Route path="/quiz/quiz5" element={<Quiz5 />} />           
          <Route path="/clubs" element={<ClubListPage />} />         
          <Route path="/result" element={<ResultPage />} />
          <Route path="/result2" element={<ResultPage2 />} />
          <Route path="/clubs/*" element={<ClubInfoPage/>}/>
          <Route path="/clubs/*/review" element={<MakeReview/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
