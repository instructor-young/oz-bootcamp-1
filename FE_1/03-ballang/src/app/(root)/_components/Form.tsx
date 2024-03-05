"use client";

import { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="이름을 쓰세요"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button
        onClick={() => {}}
        className="border bg-gray-200 border-gray-600 active:bg-gray-400"
      >
        버튼임
      </button>
    </div>
  );
}

export default Form;
