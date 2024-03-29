import styled from "@emotion/styled";

import dayjs from "dayjs";
import "dayjs/locale/ko";
import relativeTime from "dayjs/plugin/relativeTime";

import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import EmptyTodo from "./EmptyTodo";
import { useAppSelector } from "../hooks";

export interface ITodoListProps {
  id: number;
  text: string;
  created: object;
  isCompleted: boolean;
  today: object;
}

dayjs.locale("ko");
dayjs.extend(relativeTime);

export const standardDate = dayjs();

const TodoList = () => {
  const todoList = useAppSelector((state) => state.todo);

  // 디데이 기준일자(오늘)
  const displayDate = standardDate.format("M월 D일");
  const displayDay = standardDate.format("dddd");

  return (
    <Styled.TemplateContainer>
      <>
        <Styled.DisplayToday>{displayDate}</Styled.DisplayToday>
        <Styled.DisplayToday>{displayDay}</Styled.DisplayToday>
      </>
      {todoList && todoList.length >= 1 ? (
        <Styled.TodoListContainer>
          {todoList.map((todo) => (
            <TodoItem
              key={todo.id}
              id={todo.id}
              text={todo.text}
              created={todo.created}
              isCompleted={todo.isCompleted}
              today={standardDate}
            />
          ))}
        </Styled.TodoListContainer>
      ) : (
        <EmptyTodo />
      )}
      <TodoForm />
    </Styled.TemplateContainer>
  );
};

const TemplateContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 40px);
  background: #23232c;
`;

const DisplayToday = styled.div`
  font-size: 24px;
  font-weight: 400;
  color: #fff;
`;

const TodoListContainer = styled.ul`
  margin: 16px 0 0;
  padding: 0;
  list-style-type: none;
`;

const Styled = { TemplateContainer, DisplayToday, TodoListContainer };

export default TodoList;
