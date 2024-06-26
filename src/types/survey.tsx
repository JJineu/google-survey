export type SurveyInfo = {
  title: string;
  detail: string;
};

export type Question = {
  id: string;
  type: number;
  title: string;
  options: QuestionOption[];
  isNecessary: boolean;
  answer: string;
  answerList: QuestionOption[];
  dragId: number;
};

export type QuestionOption = {
  id: string;
  content: string;
};

export enum QuestionType {
  SHORT_ANSWER,
  LONG_ANSWER,
  MULTIPLE_CHOICE,
  CHECK_BOX,
  DROP_DOWN,
}

export type location = "main" | "preview" | "result";
