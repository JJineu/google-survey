import { useAppDispatch } from "../hooks/useRedux";
import { questionActions } from "../store/slice/question";
import { Question, QuestionType } from "../types/survey";
import SelectBox from "./SelectBox";
import CopyButton from "./icons/CopyButton";
import DeleteButton from "./icons/DeleteButton";
import ToggleButton from "./icons/ToggleButton";
import { v4 } from "uuid";
import { ChangeEvent } from "react";
import { SelectChangeEvent } from "@mui/material";

const menu = [
  { typeId: QuestionType.SHORT_ANSWER, name: "단답형" },
  { typeId: QuestionType.LONG_ANSWER, name: "장문형" },
  { typeId: QuestionType.MULTIPLE_CHOICE, name: "객관식 질문" },
  { typeId: QuestionType.CHECK_BOX, name: "체크박스" },
  { typeId: QuestionType.DROP_DOWN, name: "드롭다운" },
];

type Props = {
  card: Question;
};
export default function QuestionCard({ card }: Props) {
  const dispatch = useAppDispatch();

  const newQuestion = (newId: string) => {
    return { ...card, id: newId };
  };

  const handleQuestionChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      questionActions.setQuestion({ id: card.id, title: e.target.value })
    );
  };
  const handleQuestionType = (e: SelectChangeEvent) => {
    dispatch(
      questionActions.changeType({ id: card.id, typeId: e.target.value })
    );
  };

  const handleCopyQuestion = () => {
    const id = v4();
    dispatch(questionActions.addQuestion(newQuestion(id)));
  };
  const handleDeleteQuestion = () => {
    dispatch(questionActions.deleteQuestion(card.id));
  };
  const handleNecessary = () => {
    dispatch(questionActions.setNecessary(card.id));
  };
  return (
    <div className="w-full px-5">
      <div className="flex mb-3">
        <input
          className="w-full min-w-150 text-l p-4 mr-3"
          type="text"
          placeholder="질문"
          value={card.title}
          onChange={handleQuestionChange}
        />
        <div className="w-40">
          <SelectBox
            value={card.type}
            menu={menu}
            onChange={handleQuestionType}
          />
        </div>
      </div>
      {/* 드롭다운, 옵션 추가등에 따른 변경 */}
      <div className="flex justify-end items-center p-2 border-t border-slate-400">
        <CopyButton onClick={handleCopyQuestion} />
        <DeleteButton onClick={handleDeleteQuestion} />
        <ToggleButton checked={card.isNecessary} onChange={handleNecessary} />
      </div>
    </div>
  );
}
