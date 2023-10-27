import React from 'react'
import MyPage from './MyPage'
import MyRent from './MyRent'
import MyLate from './MyLate'
import MyWait from './MyWait'

function My() {
  return (
    <div>
        {/* <MyPage/>
        <MyRent/>
        <MyLate/>
        <MyWait/> */}
        <button>내 정보</button>
        <button>내 대여</button>
        <button>내 연체</button>
        <button>내 예약</button>
    </div>
  )
}

export default My