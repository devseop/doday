import React from 'react';
import { day, today } from '../lib/date';
import { useLocation, useNavigate } from 'react-router-dom';
import closeIcon from '../image/ic_close.svg';

const TodosHeader = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/');
  };

  return (
    <header className="flex justify-between items-start pt-6 mx-5 mb-4">
      <div className="flex flex-col">
        <p className="text-xxl font-bold leading-[34px]">Today is {day}day</p>
        <p className="text-xxl font-bold leading-[34px]">{today}</p>
      </div>
      {location.pathname !== '/newcard' ? null : (
        <button onClick={goToMain}>
          <img src={closeIcon} alt="닫기" />
        </button>
      )}
    </header>
  );
};

export default TodosHeader;
