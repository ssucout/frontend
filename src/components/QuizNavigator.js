import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Quiz1 from './Quiz/Quiz1.jsx';
import Quiz2 from './Quiz/Quiz2.jsx';
import Quiz3 from './Quiz/Quiz3.jsx';
import Quiz4 from './Quiz/Quiz4.jsx';
import Quiz5 from './Quiz/Quiz5.js';
import Quiz6 from './Quiz/Quiz6.js';
import Quiz7 from './Quiz/Quiz7.js';

function QuizNavigator() {
    const [answers, setAnswers] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();
    
    const handleAnswer = (answer, nextRoute, isFinal = false) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (isFinal) {
      const result = newAnswers.join('');
      if (result === '1111') {
        navigate('/result');
      } 
      else if (result === '1112') {
        navigate('/result2');
      }
      // '1113'과 같은 다른 케이스들 여기에 추가
    } else {
      navigate(nextRoute);
    }
  };
  const renderQuizComponent = () => {
    switch (location.pathname) {
      case '/quiz/quiz1':
        return <Quiz1 onAnswer={(answer) => handleAnswer(answer, '/quiz/quiz2', false)} />;
      case '/quiz/quiz2':
        return <Quiz2 onAnswer={(answer) => handleAnswer(answer, '/quiz/quiz3', false)} />;
      case '/quiz/quiz3':
        return <Quiz3 onAnswer={(answer) => handleAnswer(answer, '/quiz/quiz4', false)} />;
      case '/quiz/quiz4':
        return <Quiz4 onAnswer={(answer) => handleAnswer(answer, '', true)} />;
      case '/quiz/quiz5':
        return <Quiz5 onAnswer={(answer) => handleAnswer(answer, '', true)} />;
      case '/quiz/quiz6':
        return <Quiz6 onAnswer={(answer) => handleAnswer(answer, '', true)} />;
      case '/quiz/quiz7':
        return <Quiz7 onAnswer={(answer) => handleAnswer(answer, '', true)} />;
      default:
        return <p>Select a quiz</p>;
    }
  };

  return (
    <div>
    {renderQuizComponent()}
  </div>
  );
}

export default QuizNavigator;
