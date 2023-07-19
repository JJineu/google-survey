export type SurveyInfo = {
  title: string;
  detail: string;
};

export type Question = {
  id: string;
  type: QuestionType;
  title: string;
  options: Option[];
  isNecessary: boolean;
};

type Option = {
  id: number;
  option: string;
};

enum QuestionType {
  SHORT_ANSWER,
  LONG_ANSWER,
  MULTIPLE_CHOICE,
  CHECK_BOX,
  DROP_DOWN,
}
