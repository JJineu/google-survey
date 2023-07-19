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
    setQuestion: (state, action) => {
      const { id, title } = action.payload;
      const question = state.find((s) => s.id === id);
      question && (question.title = title);
    },
    setNecessary: (state, action) => {
      const id = action.payload;
      const question = state.find((s) => s.id === id);
      question && (question.isNecessary = !question.isNecessary);
    },
    changeType: (state, action) => {
      const { id, typeId } = action.payload;
      const question = state.find((s) => s.id === id);
      question && (question.type = typeId);
    },
    addOption: (state, action) => {},
    deleteOption: (state, action) => {},
    addQuestion: (state, action) => {
      const newQuestion = action.payload;
      state.push(newQuestion);
    },
    deleteQuestion: (state, action) => {
      const id = action.payload;
      return state.filter((s) => s.id !== id);
    },
  },
});

export const questionActions = question.actions;
