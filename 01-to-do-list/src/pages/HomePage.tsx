import { ChangeEventHandler, useState } from "react";
import { Link } from "react-router-dom";
import { useToDos } from "../contexts/todos.context";

function HomePage() {
  const { toDos, setToDos } = useToDos();

  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const handleClickAdd = () => {
    const newToDo = {
      id: toDos.length + 1,
      title,
      content,
      isComplete: false,
    };
    const newToDoList = [...toDos, newToDo];

    setToDos(newToDoList);
    setTitle("");
    setContent("");
  };

  const handleChangeTitle: ChangeEventHandler<HTMLInputElement> = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeContent: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setContent(e.target.value);
  };

  const handleClickDelete = (toDoId: number) => {
    const newToDoList = toDos.filter((toDo) => {
      return toDo.id !== toDoId;
    });

    setToDos(newToDoList);
  };

  const handleClickToggleIsComplete = (toDoId: number) => {
    const targetToDo = toDos.find((toDo) => toDo.id === toDoId);
    if (!targetToDo) return;

    targetToDo.isComplete = !targetToDo.isComplete;
    const newToDoList = [...toDos];

    setToDos(newToDoList);
  };

  return (
    <div>
      <h1>할 일 목록</h1>
      <hr />

      <input value={title} onChange={handleChangeTitle} placeholder="title" />
      <textarea
        value={content}
        onChange={handleChangeContent}
        placeholder="content"
      />
      <button onClick={handleClickAdd}>추가하기</button>

      <hr />

      <ul>
        {toDos.map((toDo) => (
          <li key={toDo.id}>
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
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
