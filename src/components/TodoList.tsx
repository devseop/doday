import React from 'react';
import { useAppSelector } from 'hooks';
import TodoItem from './TodoItem';
import EmptyEvent from './EmptyEvent';

const TodoList = () => {
  const todoList = useAppSelector(state => state.todo);

  return (
    <div className="mx-5">
      <p className="mb-3 text-4 font-semibold text-lightGray">
        {todoList.length} Events
      </p>
      {todoList.length ? (
        <ul>
          {todoList &&
            todoList.map(todo => {
              return <TodoItem key={todo.todoId} todo={todo} />;
            })}
        </ul>
      ) : (
        <EmptyEvent />
      )}
    </div>
  );
};

export default TodoList;
