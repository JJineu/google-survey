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
    addOption: (state, action) => {
      const { id, optionId } = action.payload;
      const question = state.find((s) => s.id === id);
      question &&
        question.options.push({
          id: optionId,
          content: `옵션 ${optionId}`,
        });
    },
    deleteOption: (state, action) => {
      const { id, optionId } = action.payload;
      const questionIdx = state.findIndex((s) => s.id === id);
      const options = state[questionIdx].options.filter(
        (o) => o.id !== optionId
      );
      state[questionIdx].options = options;
    },
    setOptions: (state, action) => {
      const { id, optionId, content } = action.payload;
      const questionIdx = state.findIndex((s) => s.id === id);
      const option = state[questionIdx].options.find((o) => o.id === optionId);
      option && (option.content = content);
    },
    addQuestion: (state, action) => {
      const newQuestion = action.payload;
      state.push(newQuestion);
    },
    deleteQuestion: (state, action) => {
      const id = action.payload;
      return state.filter((s) => s.id !== id);
    },
    setAnswer: (state, action) => {
      const { id, content } = action.payload;
      const question = state.find((s) => s.id === id);
      question && (question.answer = content);
    },
    setAnswerList: (state, action) => {
      const { id, optionId } = action.payload;
      const questionIdx = state.findIndex((s) => s.id === id);
      const answerList = state[questionIdx].answerList;
      if (answerList.find((e) => e === optionId)) {
        state[questionIdx].answerList = answerList.filter(
          (e) => e !== optionId
        );
      } else {
        state[questionIdx].answerList.push(optionId);
      }
    },
    resetAnswer: (state, action) => {
      state.map((s) => {
        s.answer = "";
        s.answerList = [];
      });
    },
    changeQuestionIdx: (state, action) => {
      const { id, dragId } = action.payload;
      const questionIndex = state.findIndex((q) => q.id === id);
      // const dragIndex = state.findIndex((q) => q.id === dragId);
      questionIndex && (state[questionIndex].dragId = dragId);
      // if (questionIndex !== -1 && dragIndex !== -1) {
      //   const [question] = state.splice(questionIndex, 1);
      //   state.splice(dragIndex, 0, question);
      // }
    },
  },
});

export const questionActions = question.actions;
