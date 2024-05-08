import React from 'react';

function ResultPage() {
  const answers = JSON.parse(window.localStorage.getItem('quizAnswers') || '[]');
  console.log('Loaded Answers:', answers);
  return (
    <div className="result-page">
      <h1>Your Quiz Results</h1>
      <ul>
        {answers.map((answer, index) => (
          <li key={index}>Question {index + 1}: Answer {answer}</li>
        ))}
      </ul>
      <p>This page is tailored for the answer sequence [1,1,1,1].</p>
    </div>
  );
}

export default ResultPage;
