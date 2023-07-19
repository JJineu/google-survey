import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";
import { Question } from "../../types/survey";

const initialState: Question[] = [
  {
    id: v4(),
    type: 2,
    title: "제목없는 질문",
    options: [
      {
        id: 1,
        option: "옵션 1",
      },
    ],
    isNecessary: false,
  },
];

export const question = createSlice({
  name: "question",
  initialState,
  reducers: {
    setQuestion: (state, action) => {},
    setNecessary: (state, action) => {},
    changeType: (state, action) => {},
    addOption: (state, action) => {},
    deleteOption: (state, action) => {},
    addQuestion: (state, action) => {
      const newQuestion = action.payload;
      state.push(newQuestion);
    },
  },
});

export const questionActions = question.actions;
