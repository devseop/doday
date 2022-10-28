import React from 'react';
import { Todo } from 'store/todoSlice';
import { krYear, krMonth, krDay } from 'lib/date';

const Badge = ({ todo }: { todo: Todo }) => {
  const today = `${krYear}${krMonth}${krDay}`;
  const todaysNumber = Number(today);
  const todosNumber = Number(todo.date);

  return (
    <div className=" mb-[2px]">
      {todaysNumber === todosNumber ? (
        <span className="inline-block py-[4px] px-[6px] rounded-[4px] text-white bg-d_day text-[8px] leading-[10px]">
          D-Day
        </span>
      ) : todaysNumber > todosNumber ? (
        <span className="inline-block py-[4px] px-[6px] rounded-[4px] text-white bg-since text-[8px] leading-[10px]">
          Since
        </span>
      ) : (
        <span className="inline-block py-[4px] px-[6px] rounded-[4px] text-white bg-until text-[8px] leading-[10px]">
          Until
        </span>
      )}
    </div>
  );
};

export default Badge;
