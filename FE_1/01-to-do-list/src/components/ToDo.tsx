import { Link } from "react-router-dom";
import { useToDos } from "../contexts/todos.context";
import { ToDo as TToDo } from "../types/toDo.type";

interface ToDoProps {
  toDo: TToDo;
}

function ToDo({ toDo }: ToDoProps) {
  const { toDos, setToDos } = useToDos();

  const handleClickDelete = (toDoId: number) => {
    setToDos((toDos) =>
      toDos.filter((toDo) => {
        return toDo.id !== toDoId;
      })
    );
  };

  const handleClickToggleIsComplete = (toDoId: number) => {
    const targetToDo = toDos.find((toDo) => toDo.id === toDoId);
    if (!targetToDo) return;

    targetToDo.isComplete = !targetToDo.isComplete;
    const newToDoList = [...toDos];

    setToDos(newToDoList);
  };
  return (
    <Link to={`/todos/${toDo.id}`}>
      <span
        style={{
          textDecoration: toDo.isComplete ? "line-through" : "none",
        }}
      >
        {toDo.title}
      </span>
      <button
        onClick={(e) => {
          e.preventDefault();
          handleClickDelete(toDo.id);
        }}
      >
        삭제
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          handleClickToggleIsComplete(toDo.id);
        }}
      >
        {toDo.isComplete ? "완료 취소" : "완료"}
      </button>
    </Link>
  );
}

export default ToDo;
