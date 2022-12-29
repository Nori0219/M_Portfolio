import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.scss';
import { ResumePage } from './compornents/pages/resumePage';
import { WorksPage } from './compornents/pages/worksPage';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path={`/`} element={<ResumePage />} />
      <Route path={`/Works/`} element={<WorksPage />} />
      {/* <Route path={`/Other/`} element={<OtherPage />} /> */}
      
    </Routes>
  </BrowserRouter>
  );
}

export default App;
