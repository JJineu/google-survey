import { useAppDispatch, useAppSelector } from "../hooks/useRedux";
import { questionActions } from "../store/slice/question";
import { Question, QuestionType } from "../types/survey";
import SelectBox from "./SelectBox";
import CopyButton from "./icons/CopyButton";
import DeleteButton from "./icons/DeleteButton";
import ToggleButton from "./icons/ToggleButton";
import { v4 } from "uuid";
import { ChangeEvent } from "react";
import { SelectChangeEvent } from "@mui/material";
import OptionBox from "./OptionBox";

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

  const copyQuestion = (newId: string) => {
    return { ...card, id: newId };
  };

  const handleQuestionChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      questionActions.setQuestion({ id: card.id, title: e.target.value })
    );
    console.log("question change", card.id);
  };
  const handleQuestionType = (e: SelectChangeEvent) => {
    dispatch(
      questionActions.changeType({ id: card.id, typeId: e.target.value })
    );
    console.log("selectbox", card.id);
  };

  const handleCopyQuestion = () => {
    const id = v4();
    dispatch(questionActions.addQuestion(copyQuestion(id)));
    console.log("add-q", card.id);
  };
  const handleDeleteQuestion = () => {
    dispatch(questionActions.deleteQuestion(card.id));
    console.log("delete-q", card.id);
    console.log(card);
  };
  const handleNecessary = () => {
    dispatch(questionActions.setNecessary(card.id));
    console.log("isne", card.id);
  };
  return (
    <div className="w-full px-5">
      <div className="flex mb-3">
        <input
          className="w-full text-l p-4 mr-3 bg-slate-100"
          type="text"
          placeholder="질문"
          value={card.title}
          onChange={handleQuestionChange}
        />
        <div className="w-60">
          <SelectBox
            value={card.type}
            menu={menu}
            onChange={handleQuestionType}
          />
        </div>
      </div>
      {/* <OptionBox cardId={card.id} type={card.type} options={card.options} /> */}
      <div className="flex justify-end items-center p-2 border-t border-slate-400">
        <CopyButton onClick={handleCopyQuestion} />
        <DeleteButton onClick={handleDeleteQuestion} />
        <ToggleButton checked={card.isNecessary} onChange={handleNecessary} />
      </div>
    </div>
  );
}
