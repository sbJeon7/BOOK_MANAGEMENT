import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Main/Login';
import Join from './Main/Join';
import Home from './Main/Home';
import MyPage from './My_Data/MyPage'
import MyRent from './My_Data/MyRent'
import MyLate from './My_Data/MyLate'
import MyWait from './My_Data/MyWait'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/home" element={<Home />} />
        <Route path="/myPage" element={<MyPage />} />
        <Route path="/myRent" element={<MyRent />} />
        <Route path="/myLate" element={<MyLate />} />
        <Route path="/myWait" element={<MyWait />} />
      </Routes>
    </Router>
  );
}

export default App;
