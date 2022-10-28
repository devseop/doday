import React from 'react';
import addCardIcon from '../image/ic_add.svg';
import { useNavigate } from 'react-router-dom';

const BottomNav = () => {
  const navigate = useNavigate();
  const goToAddNewCard = () => {
    navigate('/newcard');
  };

  return (
    <nav className="w-screen px-5 h-[88px] flex items-center justify-center bg-gradient-to-t from-bg via-bg to-zero">
      <button
        className="w-[44px] h-[44px] bg-black rounded-[22px] flex items-center justify-center"
        onClick={goToAddNewCard}
      >
        <img
          className="w-[24px] h-[24px]"
          src={addCardIcon}
          alt="카드 만들기"
        />
      </button>
    </nav>
  );
};

export default BottomNav;
