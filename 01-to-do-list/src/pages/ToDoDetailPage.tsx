import { useParams } from "react-router-dom";

function ToDoDetailPage() {
  const params = useParams();
  const toDoId = params.toDoId;

  return <div>투두 {toDoId}</div>;
}

export default ToDoDetailPage;
