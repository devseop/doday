import React from 'react';
import Badge from './Badge';
import { month, dayNum } from 'lib/date';

const CardInfo = () => {
  //todo 카드 생성시 선택된 날짜~
  const deadlineDay = Number(dayNum) + 7;
  return (
    <div className="mt-[14px] mx-4">
      <Badge />
      <p className="text-xxl font-semibold leading-[34px] mb-[7px]">D-Day</p>
      <p className="text-md font-semibold leading-4 mb-1">
        doday MVP deployment
      </p>
      <p className="text-[11px] leading-[11px] text-lightGray">
        {month}
        {deadlineDay}
      </p>
    </div>
  );
};

export default CardInfo;
