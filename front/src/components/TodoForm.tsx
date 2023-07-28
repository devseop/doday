interface ITodoFormProps {
  inputText: string;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
  onSubmit(event: React.FormEvent<HTMLFormElement>): void;
}

const TodoForm = ({ inputText, onChange, onSubmit }: ITodoFormProps) => {
  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <input
        type="text"
        value={inputText}
        onChange={(e) => onChange(e)}
        placeholder="할 일을 입력해주세요."
      />
      <button type="submit">submit</button>
    </form>
  );
};

export default TodoForm;
