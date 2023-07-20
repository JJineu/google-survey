import { ChangeEvent } from "react";
import { useAppDispatch } from "../../hooks/useRedux";
import { questionActions } from "../../store/slice/question";
import ClearButton from "../icons/ClearButton";

type location = "main" | "preview" | "result";
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
    dispatch(
      questionActions.deleteOption({ id: questionId, optionId: optionId })
    );
    console.log('delet-O')
  };
  const handleListOption = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      questionActions.setOptionOfList({
        id: questionId,
        optionId: optionId,
        content: e.target.value,
      })
    );
  };

  const setLocation = (location: location) => {
    switch (location) {
      case "main":
        return (
          <>
            <input
              type="text"
              value={content}
              onChange={handleListOption}
              onClick={handleAddOption}
            />
            {!isLast && <ClearButton onClick={handledeleteOption} />}
          </>
        );
      case "preview":
        return <div>{content}</div>;
      case "result":
        return <div>{content}</div>;
      default:
        return;
    }
  };

  return <div>{setLocation(location)}</div>;
}
