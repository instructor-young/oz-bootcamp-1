import { useParams } from "react-router-dom";
import { useToDos } from "../contexts/todos.context";

function ToDoDetailPage() {
  const params = useParams();
  const toDoId = params.toDoId;
  const { toDos } = useToDos();

  if (toDoId === undefined) return <div>toDoId를 잘못 입력했어요~</div>;

  const toDo = toDos.find((toDo) => toDo.id === Number(toDoId));
  if (toDo === undefined) return <div>toDo가 없어요~</div>;

  return (
    <div>
      <h1>{toDo.title}</h1>
      <p>{toDo.content}</p>
      <div>{toDo.isComplete ? "완료" : "아직 미완료"}</div>
    </div>
  );
}

export default ToDoDetailPage;
