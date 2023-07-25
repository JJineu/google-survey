import React, { ChangeEvent, useEffect, useState } from "react";
import { useAppDispatch } from "../../hooks/useRedux";
import { questionActions } from "../../store/slice/question";
import ClearButton from "../icons/ClearButton";
import { QuestionType } from "../../types/survey";
import useDebounce from "../../hooks/useDebounce";
import { v4 } from "uuid";

type Props = {
  type: number;
  idx: number;
  questionId: string;
  optionId: number;
  _id?: string;
  content: string;
  isLast: boolean;
};
function ListOption({
  type,
  idx,
  questionId,
  optionId,
  _id,
  content,
  isLast,
}: Props) {
  const dispatch = useAppDispatch();

  const [optionContent, setOptionContent] = useState(content);
  const debouncedState = useDebounce(optionContent);

  useEffect(() => {
    dispatch(
      questionActions.setOptionContent({
        _id,
        id: questionId,
        content: debouncedState,
      })
    );
  }, [_id, debouncedState, dispatch, questionId]);

  const handleOptionContent = (e: ChangeEvent<HTMLInputElement>) => {
    setOptionContent(e.target.value);
  };

  const handleAddOption = () => {
    isLast &&
      dispatch(
        questionActions.addOption({
          id: questionId,
          _id: v4(),
          optionId: optionId,
        })
      );
  };
  const handledeleteOption = () => {
    dispatch(
      questionActions.deleteOption({
        id: questionId,
        _id,
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
        return <div className="text-sm">{idx}</div>;
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
        value={optionContent}
        onChange={handleOptionContent}
        onClick={handleAddOption}
      />
      {!isLast && <ClearButton onClick={handledeleteOption} />}
    </div>
  );
}

export default React.memo(ListOption);
