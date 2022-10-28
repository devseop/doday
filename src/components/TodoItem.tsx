import React from 'react';
import { Todo } from 'store/todoSlice';
import { krYear, krMonth, krDay } from 'lib/date';
import Badge from './Badge';

const TodoItem = ({ todo }: { todo: Todo }) => {
  const today = `${krYear}${krMonth}${krDay}`;
  const todaysNumber = Number(today);
  const todosNumber = Number(todo.date);
  const result = todosNumber - todaysNumber;
  // console.log(todo.date);
  // console.log(todosNumber - todaysNumber);
  console.log(result);

  return (
    <li className="mb-4">
      <Badge todo={todo} />
      <div className="flex justify-between items-center border-b border-border">
        <div className="pb-3">
          <p className="text-md font-semibold leading-4 mb-1">{todo.title}</p>
          <p className="text-[11px] font-normal leading-[11px] text-lightGray">
            {todo.date}
          </p>
        </div>
        <p className="text-xxl font-semibold leading-[34px] mb-3">
          {result > 0
            ? `D-${result}`
            : result < 0
            ? `D+${result.toString().slice(1)}`
            : 'D-Day'}
        </p>
      </div>
    </li>
  );
};

export default TodoItem;
