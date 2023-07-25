import { ChangeEvent, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import { questionActions } from "../../store/slice/question";
import { location } from "../../types/survey";
import useDebounce from "../../hooks/useDebounce";

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
  const questions = useAppSelector((state) => state.question);
  const question = questions.find((q) => q.id === questionId);
  const dispatch = useAppDispatch();

  const [answer, setAnswer] = useState("");
  const debouncedState = useDebounce(answer);

  useEffect(() => {
    dispatch(
      questionActions.setAnswer({
        id: question?.id,
        content: debouncedState,
      })
    );
  }, [debouncedState, dispatch, question?.id]);

  const handleOptionContent = (e: ChangeEvent<HTMLInputElement>) => {
    setAnswer(e.target.value);
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
            value={answer}
            onChange={handleOptionContent}
          />
        );
      default:
        return;
    }
  };
  return <div>{setLocation(location)}</div>;
}
