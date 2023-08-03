import styled from "@emotion/styled";

import dayjs from "dayjs";
import "dayjs/locale/ko";
import relativeTime from "dayjs/plugin/relativeTime";
import duration from "dayjs/plugin/duration";
import { useState } from "react";
import { useAppDispatch } from "../hooks";
import { completeTodo, editTodo, removeTodo } from "../redux/todoSlice";

dayjs.locale("ko");
dayjs.extend(relativeTime);
dayjs.extend(duration);

interface ITodoItemProps {
  id: number;
  text: string;
  created: object;
  isCompleted: boolean;
  today: any;
}

const TodoItem = ({
  id,
  text,
  created,
  isCompleted,
  today,
}: ITodoItemProps) => {
  const dispatch = useAppDispatch();

  // D-Day 계산
  const calculatedDay = dayjs.duration(today.diff(created)).days();

  const [isUpdate, setIsUpdate] = useState<boolean>(false);
  const [updatedText, setUpdatedText] = useState<string>(text);

  const submitUpdatedTextHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(editTodo({ id, updatedText }));
    setIsUpdate(false);
  };

  // 완료여부
  const changeCompleteHandler = () => {
    dispatch(completeTodo({ id, isCompleted: !isCompleted }));
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
            <Styled.TodoHeader>
              <Styled.TodoDday>
                {calculatedDay === 0 ? "D-Day" : `D-${calculatedDay}`}
              </Styled.TodoDday>
              <Styled.CompleteButton
                onClick={changeCompleteHandler}
                isCompleted={isCompleted}
              >
                ✔ {/* {isCompleted ? "✔" : "✔"} */}
              </Styled.CompleteButton>
            </Styled.TodoHeader>
            <Styled.TodoText isCompleted={isCompleted}>{text}</Styled.TodoText>
            <div>
              <Styled.Button onClick={() => setIsUpdate(true)}>
                수정
              </Styled.Button>
              <Styled.Button onClick={deleteTodoHandler}>삭제</Styled.Button>
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
                <Styled.Button type="submit">확인</Styled.Button>
                <Styled.Button onClick={() => setIsUpdate(false)}>
                  취소
                </Styled.Button>
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
  border-radius: 24px;
  background-color: #fff;
`;

const TodoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const CompleteButton = styled.button<{ isCompleted: boolean }>`
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 20px;
  background-color: ${(props) =>
    props.isCompleted === true ? "#222222" : "rgba(0,0,0,0.1)"};
  color: ${(props) =>
    props.isCompleted === true ? "#ffffff" : "rgba(0,0,0,0.4)"};
`;

const TodoDday = styled.p`
  margin: 0;
  font-size: 24px;
  font-weight: 600;
`;

const TodoText = styled.p<{ isCompleted: boolean }>`
  margin: 0;
  word-break: keep-all;
  font-size: 24px;
  font-weight: 400;
  color: #000;
  text-decoration: ${(props) =>
    props.isCompleted === true ? "line-through" : ""};
`;

const Button = styled.button`
  border: none;
  background-color: transparent;
  color: rgba(0, 0, 0, 0.3);
`;

const Styled = {
  TodoItemContainer,
  TodoHeader,
  CompleteButton,
  TodoDday,
  TodoText,
  Button,
};

export default TodoItem;
