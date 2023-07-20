import { ChangeEvent } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import { questionActions } from "../../store/slice/question";

export type location = "main" | "preview" | "result";
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
      questionActions.setAnswer({
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
            placeholder="답변"
            value={ques?.answer}
            onChange={handleAnswerOption}
          />
        );
      case "result":
        return (
          <input type="text" placeholder="" value={ques?.answer} disabled />
        );
      default:
        return;
    }
  };
  return <div>{setLocation(location)}</div>;
}
