import React from 'react';
import TodosHeader from 'components/TodosHeader';
import Nav from 'components/Nav';
import TodoList from 'components/TodoList';

const MainPage = () => {
  return (
    <div className="flex flex-col justify-between h-screen">
      <div>
        <TodosHeader />
        <TodoList />
      </div>
      <Nav />
    </div>
  );
};

export default MainPage;
