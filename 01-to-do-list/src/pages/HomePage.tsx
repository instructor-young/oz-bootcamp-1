import { ChangeEventHandler, useState } from "react";
import ToDoList from "../components/ToDoList";
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

      <ToDoList />
    </div>
  );
}

export default HomePage;
