import { useAppDispatch } from "../hooks/useRedux";
import { questionActions } from "../store/slice/question";
import { Question, QuestionType } from "../types/survey";
import SelectBox from "./SelectBox";
import CopyButton from "./icons/CopyButton";
import DeleteButton from "./icons/DeleteButton";
import ToggleButton from "./icons/ToggleButton";
import { v4 } from "uuid";
import { ChangeEvent, useEffect, useState } from "react";
import { SelectChangeEvent } from "@mui/material";
import OptionBox from "./OptionBox";
import React from "react";
import useDebounce from "../hooks/useDebounce";

const menu = [
  { id: QuestionType.SHORT_ANSWER, content: "단답형" },
  { id: QuestionType.LONG_ANSWER, content: "장문형" },
  { id: QuestionType.MULTIPLE_CHOICE, content: "객관식 질문" },
  { id: QuestionType.CHECK_BOX, content: "체크박스" },
  { id: QuestionType.DROP_DOWN, content: "드롭다운" },
];

type Props = {
  card: Question;
};
function QuestionCard({ card }: Props) {
  const dispatch = useAppDispatch();
  const [text, setText] = useState("");
  const debouncedState = useDebounce(text);

  useEffect(() => {
    dispatch(
      questionActions.setQuestion({ id: card.id, title: debouncedState })
    );
  }, [card.id, debouncedState, dispatch]);

  const copyQuestion = (newId: string) => {
    return { ...card, id: newId };
  };

  const handleQuestionText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleQuestionType = (e: SelectChangeEvent) => {
    dispatch(
      questionActions.changeType({ id: card.id, typeId: e.target.value })
    );
  };

  const handleCopyQuestion = () => {
    const id = v4();
    dispatch(questionActions.addQuestion(copyQuestion(id)));
  };

  const handleDeleteQuestion = () => {
    dispatch(questionActions.deleteQuestion(card.id));
  };

  const handleNecessary = () => {
    dispatch(questionActions.setNecessary(card.id));
  };

  return (
    <div className="w-full px-5">
      <div className="flex">
        <input
          className="w-full text-l p-4 mr-3 bg-slate-100 focus:border-b-2 focus:border-purple-500 outline-none"
          type="text"
          placeholder="질문"
          value={text}
          onChange={handleQuestionText}
        />
        <div className="w-60">
          <SelectBox
            value={card.type.toString()}
            menu={menu}
            onChange={handleQuestionType}
          />
        </div>
      </div>
      <div className="flex">
        <OptionBox type={card.type} options={card.options} cardId={card.id} />
      </div>
      <div className="flex justify-end items-center p-2 border-t border-slate-400">
        <CopyButton onClick={handleCopyQuestion} />
        <DeleteButton onClick={handleDeleteQuestion} />
        <ToggleButton checked={card.isNecessary} onChange={handleNecessary} />
      </div>
    </div>
  );
}

export default React.memo(QuestionCard);
