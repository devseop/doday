import React from 'react';

export default function Badge() {
  //todo 만약에 디데이 전이라면 until / 디데이라면 d-day / 지났다면 since로 표시되어야 함
  return (
    <span className="py-[3px] px-[5px] rounded-[4px] text-white bg-slate-400 text-[8px] leading-[10px]">
      Until
    </span>
  );
}
