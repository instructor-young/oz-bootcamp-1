import { useState } from "react";
import Page from "../components/Page";
import { useAppDispatch } from "../store";
import { writeTil } from "../store/reducers/til.reducer";

function WriteTilPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useAppDispatch();

  const handleClickWrite = () => {
    const action = writeTil({ title, content });

    dispatch(action);
  };

  return (
    <Page title="띨 작성하기">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="띨 제목"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="띨 내용"
      />
      <button onClick={handleClickWrite}>작성하기</button>
    </Page>
  );
}

export default WriteTilPage;
