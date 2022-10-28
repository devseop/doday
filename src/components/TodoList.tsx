import React from 'react';
import { useAppSelector } from 'hooks';
import TodoItem from './TodoItem';
import EmptyEvent from './EmptyEvent';

const TodoList = () => {
  const todoList = useAppSelector(state => state.todo);

  return (
    <div className="mx-5 h-[calc(100vh-186px)]">
      <p className="mb-3 text-4 font-semibold text-lightGray">
        {todoList.length} Events
      </p>
      {todoList.length ? (
        <ul className="h-[calc(100vh-184px)] overflow-scroll mb-6">
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
