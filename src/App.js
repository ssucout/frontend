import './App.css';
import './index.css'
import MainPage from './components/MainPage.js'
import QuizMainPage from './components/Quiz/QuizMainPage.js';
// import Quiz1 from './components/Quiz/Quiz1.js'; 

function App() {
  return (
    <div className="App">
      {/* <MainPage /> */}
      <QuizMainPage />
      {/* <Quiz1 /> */}
    </div>
  );
}

export default App;
