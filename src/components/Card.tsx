import React from 'react';
import CardInfo from './CardInfo';

const Card = () => {
  return (
    <div className="w-full pb-4 rounded-lg bg-white">
      <div className="w-[320px] h-[320px] rounded-t-lg bg-slate-500">img</div>
      <CardInfo />
    </div>
  );
};

export default Card;
