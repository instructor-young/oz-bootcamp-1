import { useToDos } from "../contexts/todos.context";
import ToDo from "./ToDo";

function ToDoList() {
  const { toDos } = useToDos();

  return (
    <ul>
      {toDos.map((toDo) => (
        <li key={toDo.id}>
          <ToDo toDo={toDo} />
        </li>
      ))}
    </ul>
  );
}

export default ToDoList;
