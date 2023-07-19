export type SurveyInfo = {
  title: string;
  detail: string;
};

export type Question = {
  id: string;
  type: number;
  title: string;
  options: Option[];
  isNecessary: boolean;
};

type Option = {
  id: number;
  option: string;
};

export enum QuestionType {
  SHORT_ANSWER,
  LONG_ANSWER,
  MULTIPLE_CHOICE,
  CHECK_BOX,
  DROP_DOWN,
}
