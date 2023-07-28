interface ITodoItemProps {
  text: string;
  created: string;
  isCompleted: boolean;
}

const TodoItem = ({ text, created, isCompleted }: ITodoItemProps) => {
  return (
    <li>
      {isCompleted ? <div>완료됨</div> : <div>진행중</div>}
      <div>text: {text}</div>
      <div>created: {created}</div>
      <div>
        <button>수정</button>
        <button>삭제</button>
      </div>
    </li>
  );
};

export default TodoItem;
