import React from 'react'
import { Route, Routes} from 'react-router-dom';

import ResultVol1 from '../QuizResult/ResultVol1';
import ResultVol2 from '../QuizResult/ResultVol2';
import ResultMu1 from '../QuizResult/ResultMu1';
import ResultMu2 from '../QuizResult/ResultMu2';
import ResultDan from '../QuizResult/ResultDan';
import ResultAct from '../QuizResult/ResultAct';
import Result2D from '../QuizResult/Result2D';
import Result3D from '../QuizResult/Result3D';
import ResultLee from '../QuizResult/ResultLee';
import ResultMoon from '../QuizResult/ResultMoon';
import ResultAth1 from '../QuizResult/ResultAth1';
import ResultAth2 from '../QuizResult/ResultAth2';
import ResultCh from '../QuizResult/ResultCh';

const ResultNavigator = () => {
  return (
    <Routes>
        <Route path="vol1" element={<ResultVol1 />} />
        <Route path="vol2" element={<ResultVol2 />} />
        <Route path="mu1" element={<ResultMu1 />} />
        <Route path="mu2" element={<ResultMu2 />} />
        <Route path="dan" element={<ResultDan />} />
        <Route path="act" element={<ResultAct />} />
        <Route path="2d" element={<Result2D />} />
        <Route path="3d" element={<Result3D />} />
        <Route path="lee" element={<ResultLee />} />
        <Route path="moon" element={<ResultMoon />} />
        <Route path="ath1" element={<ResultAth1 />} />
        <Route path="ath2" element={<ResultAth2 />} />
        <Route path="ch" element={<ResultCh />} />
    </Routes>
  )
}

export default ResultNavigator