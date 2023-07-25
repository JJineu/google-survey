import { ChangeEvent } from "react";
import { useAppDispatch } from "../../hooks/useRedux";
import { questionActions } from "../../store/slice/question";
import { Question, QuestionType } from "../../types/survey";
import SelectBox from "../SelectBox";
import { SelectChangeEvent } from "@mui/material";

type Props = {
  type: number;
  questionId: string;
  question: Question;
  id: string;
  content: string;
};
export default function PreviewListOption({
  type,
  questionId,
  question,
  id,
  content,
}: Props) {
  const dispatch = useAppDispatch();
  const handleAnswerOfMultipleChoice = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      questionActions.setAnswerListOne({
        id: questionId,
        oId: id,
        content,
      })
    );
  };

  const handleAnswerOfCheckBox = () => {
    dispatch(
      questionActions.setAnswerList({ id: questionId, oId: id, content })
    );
  };

  const handleAnswerOfDropDown = (e: SelectChangeEvent) => {
    dispatch(
      questionActions.setAnswerListOne({
        id: questionId,
        oId: e.target.value,
        content,
      })
    );
  };

  const setSelectButton = () => {
    switch (type) {
      case QuestionType.MULTIPLE_CHOICE:
        return (
          <input
            type="radio"
            className="w-5 h-6  accent-purple-500 hover:bg-gray-100 "
            checked={
              question.answerList.find((answer) => answer.id === id) != null
                ? true
                : false
            }
            onChange={handleAnswerOfMultipleChoice}
            value={question.answerList[0]?.id}
          />
        );
      case QuestionType.CHECK_BOX:
        return (
          <input
            type="checkbox"
            className="w-5 h-6 accent-purple-500 hover:bg-gray-100 rounded-full"
            checked={
              question.answerList.find((answer) => answer.id === id) != null
                ? true
                : false
            }
            onChange={handleAnswerOfCheckBox}
          />
        );
      case QuestionType.DROP_DOWN:
        return (
          <SelectBox
            value={question.answerList[0].id}
            menu={question.options}
            onChange={handleAnswerOfDropDown}
          />
        );
      default:
        return;
    }
  };

  return (
    <div className="flex items-center w-full">
      <div className="w-7 h-10 flex items-center">{setSelectButton()}</div>
      <input
        className={`h-10 w-full bg-white`}
        type="text"
        value={content}
        disabled
      />
    </div>
  );
}
