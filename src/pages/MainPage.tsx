import React from 'react';
import Card from 'components/Card';
import { day, today } from '../lib/date';

const MainPage = () => {
  return (
    <div className="flex-column items-center">
      <div className="mb-5">
        <p className="text-xxl font-bold leading-[34px]">Today is {day}day</p>
        <p className="text-xxl font-bold leading-[34px]">{today}</p>
      </div>
      <Card />
    </div>
  );
};

export default MainPage;
