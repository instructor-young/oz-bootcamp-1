import { ChangeEventHandler, useState } from "react";
import { Link } from "react-router-dom";

interface ToDo {
  id: number;
  title: string;
  content: string;
  isComplete: boolean;
}

type ToDoList = ToDo[];

const initialToDoList: ToDoList = [
  {
    id: 1,
    title: "아침 밥 먹기",
    content: "500kcal 든든히 먹기",
    isComplete: false,
  },
  {
    id: 2,
    title: "점심 밥 먹기",
    content: "700kcal 든든히 먹기",
    isComplete: false,
  },
  {
    id: 3,
    title: "저녁 밥 먹기",
    content: "400kcal 든든히 먹기",
    isComplete: false,
  },
  {
    id: 4,
    title: "야식 먹기",
    content: "1000kcal 든든히 먹기",
    isComplete: false,
  },
];

function HomePage() {
  const [toDoList, setToDoList] = useState<ToDoList>(initialToDoList);
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const handleClickAdd = () => {
    const newToDo = {
      id: toDoList.length + 1,
      title,
      content,
      isComplete: false,
    };
    const newToDoList = [...toDoList, newToDo];

    setToDoList(newToDoList);
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
    const newToDoList = toDoList.filter((toDo) => {
      return toDo.id !== toDoId;
    });

    setToDoList(newToDoList);
  };

  const handleClickToggleIsComplete = (toDoId: number) => {
    const targetToDo = toDoList.find((toDo) => toDo.id === toDoId);
    if (!targetToDo) return;

    targetToDo.isComplete = !targetToDo.isComplete;
    const newToDoList = [...toDoList];

    setToDoList(newToDoList);
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
        {toDoList.map((toDo) => (
          <li key={toDo.id}>
            <Link to={`/todos/${toDo.id}`}>
              <span
                style={{
                  textDecoration: toDo.isComplete ? "line-through" : "none",
                }}
              >
                {toDo.title}
              </span>
              <button onClick={() => handleClickDelete(toDo.id)}>삭제</button>
              <button onClick={() => handleClickToggleIsComplete(toDo.id)}>
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
