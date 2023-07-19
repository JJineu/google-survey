import { createSlice } from "@reduxjs/toolkit";
import { SurveyInfo } from "../../types/survey";

const initialState: SurveyInfo = {
  title: "제목 없는 설문지",
  detail: "",
};

export const survey = createSlice({
  name: "survey",
  initialState,
  reducers: {
    setSurvey: (state, action) => {
      const { title, detail } = action.payload;
      state.title = title;
      state.detail = detail;
    },
  },
});

export const surveyAction = survey.actions;
