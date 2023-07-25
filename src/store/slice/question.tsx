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
        id: v4(),
        content: "옵션 1",
      },
    ],
    isNecessary: false,
    answer: "",
    answerList: [],
    dragId: 0,
  },
];

export const question = createSlice({
  name: "question",
  initialState,
  reducers: {
    setQuestion: (state, action) => {
      const { id, title } = action.payload;
      const question = state.find((q) => q.id === id);
      if (question) question.title = title;
    },
    setNecessary: (state, action) => {
      const id = action.payload;
      const question = state.find((q) => q.id === id);
      if (question) question.isNecessary = !question.isNecessary;
    },
    changeType: (state, action) => {
      const { id, typeId } = action.payload;
      const question = state.find((q) => q.id === id);
      if (question) question.type = typeId;
    },
    addOption: (state, action) => {
      const { id, oId, idx } = action.payload;
      const question = state.find((q) => q.id === id);
      if (question) {
        question.options.push({
          id: oId,
          content: `옵션 ${idx}`,
        });
      }
    },
    deleteOption: (state, action) => {
      const { id, oId } = action.payload;
      const questionIdx = state.findIndex((q) => q.id === id);
      if (questionIdx !== -1) {
        state[questionIdx].options = state[questionIdx].options.filter(
          (o) => o.id !== oId
        );
      }
    },
    setOptionContent: (state, action) => {
      const { id, oId, content } = action.payload;
      const questionIdx = state.findIndex((q) => q.id === id);
      const optionIdx =
        questionIdx !== -1
          ? state[questionIdx].options.findIndex((o) => o.id === oId)
          : -1;
      if (optionIdx !== -1) {
        state[questionIdx].options[optionIdx].content = content;
      }
    },

    addQuestion: (state, action) => {
      const newQuestion = action.payload;
      state.push(newQuestion);
    },
    deleteQuestion: (state, action) => {
      const id = action.payload;
      return state.filter((q) => q.id !== id);
    },
    setAnswer: (state, action) => {
      const { id, content } = action.payload;
      const question = state.find((q) => q.id === id);
      if (question) question.answer = content;
    },
    setAnswerListOne: (state, action) => {
      const { id, oId, content } = action.payload;
      const questionIdx = state.findIndex((q) => q.id === id);
      const answerList = state[questionIdx].answerList;
      if (answerList[0]?.id === oId) {
        state[questionIdx].answerList = [];
      } else {
        state[questionIdx].answerList = [{ id: oId, content }];
      }
    },
    setAnswerList: (state, action) => {
      const { id, oId, content } = action.payload;
      const questionIdx = state.findIndex((q) => q.id === id);
      const answerList = state[questionIdx].answerList;
      if (answerList.find((answer) => answer.id === oId) != null) {
        state[questionIdx].answerList = answerList.filter(
          (answer) => answer.id !== oId
        );
      } else {
        state[questionIdx].answerList.push({ id: oId, content });
      }
    },
    resetAnswer: (state) => {
      state.forEach((q) => {
        q.answer = "";
        q.answerList = [];
      });
    },
  },
});

export const questionActions = question.actions;
