import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchAppBar from './component/nav';
import Courses from './component/courses'; 
import Main from './component/main';
import Login from './component/login';
import Web from './component/web';
import AppD from './component/appD';
import Ai from './component/ai';
import Blog from './component/blog';
// اذا بدي افهم موضوع اليوزنيم ابدا بالتفكير من صفحة اللوغ ان
function App() {
    const [username, setUsername] = useState('');
  return (
    <BrowserRouter>
      <SearchAppBar />
      <Routes>
        <Route path="/" element={<Main username={username} />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/login" element={<Login setUsername={setUsername} />} />
        <Route path="/web" element={<Web />}></Route>
        <Route path="/appD" element={<AppD />}></Route>
        <Route path="/ai" element={<Ai />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;


