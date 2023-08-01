import styled from "@emotion/styled";

interface ITodoFormProps {
  inputText: string;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
  onSubmit(event: React.FormEvent<HTMLFormElement>): void;
}

const TodoForm = ({ inputText, onChange, onSubmit }: ITodoFormProps) => {
  return (
    <TodoFormContainer
      onSubmit={(e) => onSubmit(e)}
      style={{ position: "fixed", bottom: "20px" }}
    >
      <Styled.TodoInput
        type="text"
        value={inputText}
        onChange={(e) => onChange(e)}
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
