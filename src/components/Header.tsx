import React from 'react';
import { day, today } from '../lib/date';
import settingIcon from '../image/ic_setting.svg';

const Header = () => {
  return (
    <div className="flex justify-between items-start">
      <div className="mb-5">
        <p className="text-xxl font-bold leading-[34px]">Today is {day}day</p>
        <p className="text-xxl font-bold leading-[34px]">{today}</p>
      </div>
      <img src={settingIcon} alt="설정" />
    </div>
  );
};

export default Header;
