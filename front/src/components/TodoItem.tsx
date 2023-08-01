import styled from "@emotion/styled";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import duration from "dayjs/plugin/duration";

interface ITodoItemProps {
  text: string;
  created: object;
  isCompleted: boolean;
  today: any;
}

dayjs.locale("ko");
dayjs.extend(relativeTime);
dayjs.extend(duration);

const TodoItem = ({ text, created, isCompleted, today }: ITodoItemProps) => {
  // D-Day 계산
  const calculatedDay = dayjs.duration(today.diff(created)).days();

  return (
    <li style={{ marginBottom: "16px", display: "flex" }}>
      {/* {isCompleted ? <div>완료됨</div> : <div>진행중</div>} */}

      <Styled.TodoItemContainer>
        <Styled.TodoDday>
          {calculatedDay === 0 ? "D-Day" : `D-${calculatedDay}`}
        </Styled.TodoDday>
        <Styled.TodoText>{text}</Styled.TodoText>
        {/* <div>
          <button>수정</button>
          <button>삭제</button>
        </div> */}
      </Styled.TodoItemContainer>
    </li>
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
