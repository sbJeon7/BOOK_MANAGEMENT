import React from 'react'

function Login() {
  const handleJoin = () => {               
    window.location.href='/join';
  };
  const handleHome = () => {               
    window.location.href='/home';
  };

  return (
    <div>
      도서관리시스템
      <br />
      아이디
      <input/>
      <button onClick={handleHome}>로그인</button>
      <br />
      비밀번호
      <input/>
      <button onClick={handleJoin}>회원가입</button>
    </div>
  )
}

export default Login