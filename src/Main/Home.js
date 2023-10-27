import React from 'react'

function Home() {
  const handleMy = () => {               
    window.location.href='/my';
  };
  const handleBook = () => {               
    window.location.href='/book';
  };

  return (
    <div>
      <button onClick={handleMy}>회원정보</button>
      <button onClick={handleBook}>도서정보</button>
    </div>
  )
}

export default Home