import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchAppBar from './component/nav';
import Courses from './component/courses'; 

function App() {
  return (
    <BrowserRouter>
      <SearchAppBar />
      <Routes>
        <Route path="/courses" element={<Courses />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

