import { ChangeEvent } from "react";
import { useAppDispatch } from "../../hooks/useRedux";
import { questionActions } from "../../store/slice/question";
import ClearButton from "../icons/ClearButton";
import { QuestionType } from "../../types/survey";
import { location } from "./AnswerOption";

type Props = {
  type: number;
  questionId: string;
  location?: location;
  optionId: number;
  content: string;
  isLast: boolean;
};
export default function ListOption({
  type,
  questionId,
  location = "main",
  optionId,
  content,
  isLast = false,
}: Props) {
  const dispatch = useAppDispatch();
  const handleAddOption = () => {
    isLast &&
      dispatch(
        questionActions.addOption({ id: questionId, optionId: optionId })
      );
  };
  const handledeleteOption = () => {
    console.log("delete-O", optionId);
    dispatch(
      questionActions.deleteOption({ id: questionId, optionId: optionId })
    );
  };
  const handleListOption = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    dispatch(
      questionActions.setOptions({
        id: questionId,
        optionId: optionId,
        content: e.target.value,
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
            disabled
          />
        );
      case QuestionType.CHECK_BOX:
        return (
          <input
            type="checkbox"
            className="w-5 h-6 accent-purple-500 hover:bg-gray-100 rounded-full"
            disabled
          />
        );
      case QuestionType.DROP_DOWN:
        return <div className="text-sm">{optionId}</div>;
      default:
        return;
    }
  };

  return (
    <div className="flex items-center w-full">
      <div className="w-7 h-10 flex items-center ">{setSelectButton()}</div>
      <input
        className={`h-10 hover:bg-gray-100 focus:border-b-2 focus:border-purple-500 outline-none ${
          isLast ? "text-sm text-slate-500" : "w-full"
        }`}
        type="text"
        value={content}
        onChange={handleListOption}
        onClick={handleAddOption}
      />
      {!isLast && location === "main" && (
        <ClearButton onClick={handledeleteOption} />
      )}
    </div>
  );
}
