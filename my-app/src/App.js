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
    // username is a varible , the default value is empty string, when the user type the username Rawan the setUserName function update the value from empty string to rawan
  return (
    <BrowserRouter>
      <SearchAppBar />
      <Routes>
        <Route path="/" element={<Main username={username} />} />
        {/*  Passing username to the Main component */}
        <Route path="/courses" element={<Courses />} />
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/login" element={<Login setUsername={setUsername} />} />
        {/* Passing setUsername to the Login component*/}
        <Route path="/web" element={<Web />}></Route>
        <Route path="/appD" element={<AppD />}></Route>
        <Route path="/ai" element={<Ai />}></Route>
        
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;


