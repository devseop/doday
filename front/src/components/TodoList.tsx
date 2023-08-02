import { useRef, useState } from "react";
import styled from "@emotion/styled";

import dayjs from "dayjs";
import "dayjs/locale/ko";
import relativeTime from "dayjs/plugin/relativeTime";

import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import EmptyTodo from "./EmptyTodo";

export interface ITodoListProps {
  id: number;
  text: string;
  created: object;
  isCompleted: boolean;
  today: object;
}

dayjs.locale("ko");
dayjs.extend(relativeTime);

const TodoList = () => {
  const [inputText, setInputText] = useState<string>("");
  const [todoList, setTodoList] = useState<ITodoListProps[]>([]);

  // 디데이 기준일자(오늘)
  const standardDate = dayjs();
  const displayDate = standardDate.format("M월 D일");
  const displayDay = standardDate.format("dddd");

  const nextId = useRef<number>(0);

  const inputTextHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  // To-Do 제출하기
  const formSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTodo: ITodoListProps = {
      id: nextId.current,
      text: inputText,
      created: dayjs(),
      isCompleted: false,
      today: standardDate,
    };
    setTodoList([...todoList, newTodo]);
    nextId.current += 1;
    setInputText("");
  };

  // To-do 값 수정하기
  const editTextHandler = (newTodo: ITodoListProps): void => {
    const newTodoList = todoList.map((todo) => {
      if (todo.id === newTodo.id) {
        return newTodo;
      } else {
        return todo;
      }
    });
    setTodoList(newTodoList);
  };

  // To-do 삭제하기
  const deleteTodoHandler = (id: number) => {
    setTodoList(todoList.filter((item) => item.id !== id));
  };

  return (
    <Styled.TemplateContainer>
      <>
        <Styled.DisplayToday>{displayDate}</Styled.DisplayToday>
        <Styled.DisplayToday>{displayDay}</Styled.DisplayToday>
      </>
      {todoList && todoList.length >= 1 ? (
        <Styled.TodoListContainer>
          {todoList.map((todo, index) => (
            <TodoItem
              key={todo.id}
              id={todo.id}
              text={todo.text}
              created={todo.created}
              isCompleted={todo.isCompleted}
              today={standardDate}
              onClickUpdate={editTextHandler}
              onClickDelete={deleteTodoHandler}
            />
          ))}
        </Styled.TodoListContainer>
      ) : (
        <EmptyTodo />
      )}
      <TodoForm
        inputText={inputText}
        onChange={inputTextHandler}
        onSubmit={formSubmitHandler}
      />
    </Styled.TemplateContainer>
  );
};

const TemplateContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 40px);
  background: #e9ecef;
`;

const DisplayToday = styled.div`
  font-size: 24px;
  font-weight: 700;
`;

const TodoListContainer = styled.ul`
  margin: 16px 0 0;
  padding: 0;
  list-style-type: none;
`;

const Styled = { TemplateContainer, DisplayToday, TodoListContainer };

export default TodoList;
