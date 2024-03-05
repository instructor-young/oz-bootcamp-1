import { createSlice } from "@reduxjs/toolkit";

type Til = {
  title: string;
  content: string;
};

const tilSlice = createSlice({
  initialState: {
    tils: [] as Til[],
  },
  name: "til",
  reducers: {
    writeTil(
      state,
      action: { type: string; payload: { title: string; content: string } }
    ) {
      state.tils.push(action.payload);
    },
    removeTil(state) {
      state.tils.pop();
    },
  },
});

const { actions, reducer } = tilSlice;

export const { writeTil, removeTil } = actions;
export const tilReducer = reducer;
