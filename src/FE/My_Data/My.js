import React, { useState } from 'react';
import MyPage from './MyPage';
import MyRent from './MyRent';
import MyLate from './MyLate';
import MyWait from './MyWait';

function My() {
  // 상태를 사용하여 현재 선택된 탭을 추적합니다.
  const [currentTab, setCurrentTab] = useState('');

  // 버튼 클릭에 따라 렌더링할 컴포넌트를 결정하는 함수
  const renderTabContent = () => {
    switch (currentTab) {
      case 'myPage':
        return <MyPage />;
      case 'myRent':
        return <MyRent />;
      case 'myLate':
        return <MyLate />;
      case 'myWait':
        return <MyWait />;
      default:
        return null; // 기본값은 아무 것도 렌더링하지 않습니다.
    }
  };

  return (
    <div>
      {/* 버튼을 누르면 setCurrentTab을 호출하여 현재 탭 상태를 업데이트합니다. */}
      <button onClick={() => setCurrentTab('myPage')}>내 정보</button>
      <button onClick={() => setCurrentTab('myRent')}>내 대여</button>
      <button onClick={() => setCurrentTab('myLate')}>내 연체</button>
      <button onClick={() => setCurrentTab('myWait')}>내 예약</button>

      {/* 현재 선택된 탭의 컴포넌트를 렌더링합니다. */}
      {renderTabContent()}
    </div>
  );
}

export default My;
