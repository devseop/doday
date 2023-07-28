import { useRef, useState } from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import EmptyTodo from "./EmptyTodo";

interface ITodoListProps {
  id: number;
  text: string;
  created: string;
  isCompleted: boolean;
}

dayjs.locale("ko");
dayjs.extend(relativeTime);

const TodoList = () => {
  const [inputText, setInputText] = useState<string>("");
  const [todoList, setTodoList] = useState<ITodoListProps[]>([]);
  const createDate = dayjs().format("YYYY년 MM월 DD일 HH:mm:ss");
  // console.log(createDate.substring(0, 13));

  const nextId = useRef<number>(0);

  const inputTextHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const formSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTodo: ITodoListProps = {
      id: nextId.current,
      text: inputText,
      created: createDate,
      isCompleted: false,
    };
    setTodoList([newTodo, ...todoList]);
    nextId.current += 1;
    setInputText("");
    console.log(newTodo);
  };

  return (
    <>
      {todoList && todoList.length >= 1 ? (
        <ul>
          {todoList.map((todo, index) => (
            <TodoItem
              key={todo.id}
              text={todo.text}
              created={todo.created}
              isCompleted={todo.isCompleted}
            />
          ))}
        </ul>
      ) : (
        <EmptyTodo />
      )}
      <TodoForm
        inputText={inputText}
        onChange={inputTextHandler}
        onSubmit={formSubmitHandler}
      />
    </>
  );
};

export default TodoList;
