import styled from "@emotion/styled";

const EmptyTodo = () => {
  const emptyIconUrl = "/images/ic_empty.png";
  const emptyText = "할 일이 없습니다.\n할 일을 등록해보세요!";

  return (
    <Styled.EmptyTodoContainer>
      <img src={emptyIconUrl} alt="icon" />
      <Styled.EmptyText>{emptyText}</Styled.EmptyText>
    </Styled.EmptyTodoContainer>
  );
};

const EmptyTodoContainer = styled.div`
  margin: 50% 0;
  text-align: center;
`;

const EmptyText = styled.p`
  white-space: pre-wrap;
  font-weight: 500;
  line-height: 1.5;
`;

const Styled = { EmptyTodoContainer, EmptyText };

export default EmptyTodo;
