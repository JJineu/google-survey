import { ChangeEvent } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import { questionActions } from "../../store/slice/question";

type location = "main" | "preview" | "result";
type Props = {
  type: number;
  questionId: string;
  location?: location;
};
export default function AnswerOption({
  type,
  questionId,
  location = "main",
}: Props) {
  const question = useAppSelector((state) => state.question);
  const ques = question.find((q) => q.id === questionId);
  const dispatch = useAppDispatch();

  const handleAnswerOption = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      questionActions.setOptionOfAnswer({
        id: ques?.id,
        content: e.target.value,
      })
    );
  };

  const setLocation = (location: location) => {
    switch (location) {
      case "main":
        return (
          <input
            className="w-full"
            type="text"
            placeholder={type === 0 ? "단답형 텍스트" : "장문형 텍스트"}
            disabled
          />
        );
      case "preview":
        return (
          <input
            type="text"
            placeholder="내 답변"
            value={ques?.optionOfAnswer}
            onChange={handleAnswerOption}
          />
        );
      case "result":
        return (
          <input
            type="text"
            placeholder=""
            value={ques?.optionOfAnswer}
            disabled
          />
        );
      default:
        return;
    }
  };
  return <div>{setLocation(location)}</div>;
}
