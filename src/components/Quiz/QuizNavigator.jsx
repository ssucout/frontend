import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Quiz1 from '../Quiz/Quiz1.jsx'
import Quiz2 from '../Quiz/Quiz2.jsx'
import Quiz3 from '../Quiz/Quiz3.jsx'
import Quiz41 from '../Quiz/Quiz41.jsx'
import Quiz42 from '../Quiz/Quiz42.jsx'
import Quiz43 from '../Quiz/Quiz43.jsx'
import Quiz44 from '../Quiz/Quiz44.jsx'
import Quiz45 from '../Quiz/Quiz45.jsx'
import Quiz46 from '../Quiz/Quiz46.jsx'
import Quiz5 from '../Quiz/Quiz5.jsx'

import Quiz22 from '../Quiz/Quiz22.jsx'
import Quiz23 from '../Quiz/Quiz23.jsx'
import Quiz24 from '../Quiz/Quiz24.jsx'
import Quiz25 from '../Quiz/Quiz25.jsx'
import Quiz26 from '../Quiz/Quiz26.jsx'
import Quiz27 from '../Quiz/Quiz27.jsx'

function QuizNavigator() {
  return (
    <Routes>
        <Route path="quiz1" element={<Quiz1 />} />
        <Route path="quiz2" element={<Quiz2 />} />
        <Route path="quiz22" element={<Quiz22 />} />
        <Route path="quiz23" element={<Quiz23 />} />
        <Route path="quiz24" element={<Quiz24 />} />
        <Route path="quiz25" element={<Quiz25 />} />
        <Route path="quiz26" element={<Quiz26 />} />
        <Route path="quiz27" element={<Quiz27 />} />
        <Route path="quiz3" element={<Quiz3 />} />
        <Route path='quiz4_1' element = {<Quiz41 />} />
        <Route path='quiz4_2' element = {<Quiz42 />} />
        <Route path='quiz4_3' element = {<Quiz43 />} />
        <Route path='quiz4_4' element = {<Quiz44 />} />
        <Route path='quiz4_5' element = {<Quiz45 />} />
        <Route path='quiz4_6' element = {<Quiz46 />} />
        <Route path='quiz5' element = {<Quiz5 />} />
    </Routes>
  )
}

export default QuizNavigator