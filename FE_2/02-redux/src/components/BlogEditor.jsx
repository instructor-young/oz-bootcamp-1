import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { writePost } from "../redux/reducers/blog.reducer";

function BlogEditor() {
  const dispatch = useDispatch();
  const [value, setValue] = useState();

  const handleClickWrite = () => {
    // 글을 쓴다~
    // 저장소에 저장되어 있는 글 목록에 글을 추가한다~
    // 아 공장에다가 작업지시서를 줘야겠구나
    // 아 작업지시서를 작성해야지~
    const action = writePost(value);
    dispatch(action);
    // 작성한 작업지시서를 우체부 통해서 보내야지
  };

  return (
    <section>
      <h2>글 작성하기</h2>
      <textarea value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={handleClickWrite}>작성하기</button>
    </section>
  );
}

export default BlogEditor;
