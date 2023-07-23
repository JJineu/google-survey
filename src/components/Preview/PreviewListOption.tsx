import { ChangeEvent, useEffect } from "react";
import { useAppDispatch } from "../../hooks/useRedux";
import { questionActions } from "../../store/slice/question";
import { Question, QuestionType } from "../../types/survey";

type Props = {
  type: number;
  questionId: string;
  question: Question;
  optionId: number;
  content: string;
};
export default function PreviewListOption({
  type,
  questionId,
  question,
  optionId,
  content,
}: Props) {
  const dispatch = useAppDispatch();
  const handleAnswerOfMultipleChoice = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      questionActions.setAnswer({
        id: questionId,
        content: optionId.toString(),
      })
    );
  };

  const handleAnswerOfCheckBox = () => {
    dispatch(
      questionActions.setAnswerList({ id: questionId, optionId, content })
    );
  };
  // useEffect(() => {
  //   console.log("Updated answerList:", question.answer);
  // }, [question.answer]);

  const setSelectButton = () => {
    switch (type) {
      case QuestionType.MULTIPLE_CHOICE:
        return (
          <input
            type="radio"
            className="w-5 h-6  accent-purple-500 hover:bg-gray-100 "
            checked={question.answer.toString() === optionId.toString()}
            onChange={handleAnswerOfMultipleChoice}
            value={question.answer}
          />
        );
      case QuestionType.CHECK_BOX:
        return (
          <input
            type="checkbox"
            className="w-5 h-6 accent-purple-500 hover:bg-gray-100 rounded-full"
            checked={
              question.answerList.find((arr) => arr === optionId) != null
                ? true
                : false
            }
            onChange={handleAnswerOfCheckBox}
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
