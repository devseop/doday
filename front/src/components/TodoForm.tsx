import styled from "@emotion/styled";
import { useAppDispatch } from "../hooks";
import { addTodo } from "../redux/todoSlice";
import { useState } from "react";

export interface ITodoItemProps {
  id: number;
  text: string;
  created: object;
  isCompleted: boolean;
  today: object;
}

const TodoForm = () => {
  const [inputText, setInputText] = useState<string>("");
  const dispatch = useAppDispatch();

  const onSubmitTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log("dispatch");
    dispatch(addTodo(inputText));
    setInputText("");
  };

  const inputTextHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  return (
    <TodoFormContainer
      onSubmit={onSubmitTodo}
      style={{ position: "fixed", bottom: "20px" }}
    >
      <Styled.TodoInput
        type="text"
        value={inputText}
        onChange={inputTextHandler}
        placeholder="할 일을 적고 Enter를 눌러주세요."
      />
      {/* <button type="submit">등록</button> */}
    </TodoFormContainer>
  );
};

const TodoFormContainer = styled.form`
  position: fixed;
  bottom: 20px;
  width: calc(100% - 40px);
`;

const TodoInput = styled.input`
  /* layout */
  width: calc(100% - 26px);
  height: 18px;
  padding: 14px 12px;

  /* style */
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  background: #ffffff;
  outline: none;

  :focus {
    border-color: #2e6afe;
  }
`;

const Styled = { TodoFormContainer, TodoInput };

export default TodoForm;
