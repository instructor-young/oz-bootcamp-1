import { createSlice } from "@reduxjs/toolkit";

// 공장
// 작업명
// 작업명을 활용해서 작업 생성기(Action Creator) 정도를 만들어 두면 좋겠죠

const initialPosts = [
  { id: 1, content: "첫 번째 게시물" },
  { id: 2, content: "두 번째 게시물" },
  { id: 3, content: "세 번째 게시물" },
];

const blogSlice = createSlice({
  initialState: { posts: initialPosts },
  name: "blog",
  reducers: {
    writePost: (state, { payload }) => {
      // 불변성 관리를 할 필요가 없어요.
      // 변경한 상태를 직접 돌려주지 않아도 되어요.
      state.posts.push({ id: 999, content: payload });
    },
    deletePost: () => {},
  },
});

// 슬라이스 안에는 "공장"이 만들어져 있고
export const blogReducer = blogSlice.reducer;

// 슬라이스 안에는 "액션 크리에이터(작업지시서 생성기)"이 만들어져 있고
export const { writePost, deletePost } = blogSlice.actions;
