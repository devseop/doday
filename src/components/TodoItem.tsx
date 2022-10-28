import React from 'react';
import { Todo } from 'store/todoSlice';
import Badge from './Badge';

const TodoItem = ({ todo }: { todo: Todo }) => {
  const now = new Date();
  const todosYear = todo.date.slice(0, 4);
  const todosMonth = todo.date.slice(4, 6);
  const todosDay = todo.date.slice(6, 8);
  const todosDate = new Date(`${todosYear}-${todosMonth}-${todosDay}`);
  const daydiff = todosDate.getTime() - now.getTime();
  const resultDay = Math.floor(daydiff / (1000 * 60 * 60 * 24));

  return (
    <li className="mb-4">
      <Badge todo={todo} />
      <div className="flex justify-between items-center border-b border-border">
        <div className="pb-3">
          <p className="text-md font-semibold leading-4 mb-1">{todo.title}</p>
          <p className="text-[11px] font-normal leading-[11px] text-lightGray">
            {todosYear}.{todosMonth}.{todosDay}
          </p>
        </div>
        <p className="text-xxl font-semibold leading-[34px] mb-3">
          {resultDay > 0
            ? `D-${resultDay}`
            : resultDay === -1
            ? 'D-Day'
            : `D+${resultDay.toString().slice(1)}`}
        </p>
      </div>
    </li>
  );
};

export default TodoItem;
