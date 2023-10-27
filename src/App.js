import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Main/Login';
import Join from './Main/Join';
import Home from './Main/Home';
import My from './My_Data/My';
import MyPage from './My_Data/MyPage'
import MyRent from './My_Data/MyRent'
import MyLate from './My_Data/MyLate'
import MyWait from './My_Data/MyWait'
import Book from './Book_Data/Book'
import BookList from './Book_Data/BookList'
import BookSearch from './Book_Data/BookSearch'
import BookLate from './Book_Data/BookLate'
import BookWait from './Book_Data/BookWait'
import BookChart from './Book_Data/BookChart'
import BookNew from './Book_Data/BookNew'
import BookBye from './Book_Data/BookBye'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/home" element={<Home />} />
        <Route path="/my" element={<My />} />
        <Route path="/myPage" element={<MyPage />} />
        <Route path="/myRent" element={<MyRent />} />
        <Route path="/myLate" element={<MyLate />} />
        <Route path="/myWait" element={<MyWait />} />
        <Route path="/book" element={<Book />} />
        <Route path="/bookList" element={<BookList />} />
        <Route path="/bookSearch" element={<BookSearch />} />
        <Route path="/bookLate" element={<BookLate />} />
        <Route path="/bookWait" element={<BookWait />} />
        <Route path="/bookChart" element={<BookChart />} />
        <Route path="/bookNew" element={<BookNew />} />
        <Route path="/bookBye" element={<BookBye />} />
      </Routes>
    </Router>
  );
}

export default App;
