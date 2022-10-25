import React from 'react';
import Header from 'components/Header';
import Card from 'components/Card';
import BottomNav from 'components/BottomNav';

const MainPage = () => {
  return (
    <div className="flex-column items-center">
      <Header />
      <Card />
      <BottomNav />
    </div>
  );
};

export default MainPage;
