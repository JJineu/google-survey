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
};

export type QuestionOption = {
  id: number;
  content: string;
};

export enum QuestionType {
  SHORT_ANSWER,
  LONG_ANSWER,
  MULTIPLE_CHOICE,
  CHECK_BOX,
  DROP_DOWN,
}
