import React from 'react';
import listViewIcon from '../image/ic_view_list.svg';
import addCardIcon from '../image/ic_add.svg';
import { useNavigate } from 'react-router-dom';

const BottomNav = () => {
  const navigate = useNavigate();
  const goToAddNewCard = () => {
    navigate('/newcard');
  };

  return (
    <div className="flex justify-between items-center h-[88px]">
      <button className="w-[44px] h-[44px] flex items-center justify-center">
        <img src={listViewIcon} alt="전체보기" />
      </button>
      <p className="w-9 text-center font-semibold text-lightGray">2/7</p>
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
    </div>
  );
};

export default BottomNav;
