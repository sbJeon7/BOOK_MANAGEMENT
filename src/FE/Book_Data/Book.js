import React, { useState } from 'react'
import BookList from './BookList';
import BookSearch from './BookSearch';
import BookLate from './BookLate';
import BookWait from './BookWait';
import BookChart from './BookChart';
import BookNew from './BookNew';
import BookBye from './BookBye';

function Book() {
  const [currentTab, setCurrentTab] = useState('');

  const renderTabContent = () => {
    switch (currentTab) {
      case 'bookList':
        return <BookList />;
        case 'bookSearch':
        return <BookSearch />;
        case 'bookLate':
        return <BookLate />;
        case 'bookWait':
        return <BookWait />;
        case 'bookChart':
        return <BookChart />;
        case 'bookNew':
        return <BookNew />;
        case 'bookBye':
        return <BookBye />;
        default:
          return null;
    }
  };

  return (
    <div>
      <button onClick={() => setCurrentTab('bookList')}>도서관리</button>
      <button onClick={() => setCurrentTab('bookSearch')}>도서검색</button>
      <button onClick={() => setCurrentTab('bookLate')}>연체</button>
      <button onClick={() => setCurrentTab('bookWait')}>예약</button>
      <button onClick={() => setCurrentTab('bookChart')}>통계</button>
      <button onClick={() => setCurrentTab('bookNew')}>신규도서</button>
      <button onClick={() => setCurrentTab('bookBye')}>폐기도서</button>

      {renderTabContent()}
    </div>
  );
}

export default Book