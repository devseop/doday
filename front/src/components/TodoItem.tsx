import styled from "@emotion/styled";

import dayjs from "dayjs";
import "dayjs/locale/ko";
import relativeTime from "dayjs/plugin/relativeTime";
import duration from "dayjs/plugin/duration";
import { useState } from "react";
import { useAppDispatch } from "../hooks";
import { editTodo, removeTodo } from "../redux/todoSlice";

dayjs.locale("ko");
dayjs.extend(relativeTime);
dayjs.extend(duration);

interface ITodoItemProps {
  id: number;
  text: string;
  created: object;
  isCompleted: boolean;
  today: any;
  // onClickUpdate(updatedTodoItem: ITodoListProps): void;
  // onClickDelete(id: number): void;
}

const TodoItem = ({
  id,
  text,
  created,
  isCompleted,
  today,
}: // onClickUpdate,
// onClickDelete,
ITodoItemProps) => {
  const dispatch = useAppDispatch();

  // D-Day 계산
  const calculatedDay = dayjs.duration(today.diff(created)).days();

  const [isUpdate, setIsUpdate] = useState<boolean>(false);
  const [updatedText, setUpdatedText] = useState<string>(text);

  const submitUpdatedTextHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const updatedTodo = {
    //   id: id,
    //   text: updatedText,
    //   created: created,
    //   isCompleted: false,
    //   today: today,
    // };
    // onClickUpdate(updatedTodo);
    // console.log("dispatch");
    dispatch(editTodo({ id, updatedText }));
    setIsUpdate(false);
  };

  // 완료여부
  const changeCompleteHandler = () => {
    const updatedTodo = {
      id: id,
      text: updatedText,
      created: created,
      isCompleted: !isCompleted,
      today: today,
    };
    // onClickUpdate(updatedTodo);
  };

  const deleteTodoHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    dispatch(removeTodo(id));
  };

  return (
    <>
      {!isUpdate ? (
        <li style={{ marginBottom: "16px", display: "flex" }}>
          <Styled.TodoItemContainer>
            <button onClick={changeCompleteHandler}>
              {isCompleted ? "✔" : null}
            </button>
            <Styled.TodoDday>
              {calculatedDay === 0 ? "D-Day" : `D-${calculatedDay}`}
            </Styled.TodoDday>
            <Styled.TodoText>{text}</Styled.TodoText>
            <div>
              <button onClick={() => setIsUpdate(true)}>수정</button>
              <button onClick={deleteTodoHandler}>삭제</button>
            </div>
          </Styled.TodoItemContainer>
        </li>
      ) : (
        <li style={{ marginBottom: "16px", display: "flex" }}>
          <Styled.TodoItemContainer>
            <form onSubmit={submitUpdatedTextHandler}>
              <input
                type="text"
                value={updatedText}
                onChange={(e) => setUpdatedText(e.target.value)}
              />
              <div>
                <button type="submit">확인</button>
                <button onClick={() => setIsUpdate(false)}>취소</button>
              </div>
            </form>
          </Styled.TodoItemContainer>
        </li>
      )}
    </>
  );
};

const TodoItemContainer = styled.div`
  /* layout */
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 16px;

  /* style */
  border-radius: 8px;
  background-color: #fff;
`;

const TodoDday = styled.p`
  margin: 0 0 12px 0;
  font-size: 24px;
  font-weight: 700;
`;

const TodoText = styled.p`
  margin: 0;
  word-break: keep-all;
  font-size: 16px;
  font-weight: 600;
  color: rgba(34, 34, 34, 0.8);
`;

const Styled = {
  TodoItemContainer,
  TodoDday,
  TodoText,
};

export default TodoItem;
