import React from 'react';
import CardInfo from './CardInfo';
import mockImage from '../image/ye.png';

const Card = () => {
  return (
    <div className="w-full pb-4 rounded-lg bg-white">
      <img
        className="w-[320px] h-[320px] rounded-t-lg object-cover"
        src={mockImage}
        alt="이미지"
      />
      <CardInfo />
    </div>
  );
};

export default Card;
