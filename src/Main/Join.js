import React from 'react'

function Join() {
  const handleLogin = () => {               
    window.location.href='/';
  };

  return (
    <div> 
      이름
      <input/>
      <br />이메일
      <input/>
      <button>본인인증</button>
      <br />
      아이디
      <input/>
      <button>중복확인</button>
      <br />
      비밀번호
      <input/>
      <button onClick={handleLogin}>가입</button>

    
    </div>
  )
}

export default Join