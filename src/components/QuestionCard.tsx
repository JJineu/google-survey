import { Question, QuestionType } from "../types/survey";
import SelectBox from "./SelectBox";
import CopyButton from "./icons/CopyButton";
import DeleteButton from "./icons/DeleteButton";
import ToggleButton from "./icons/ToggleButton";

const menu = [
  { id: QuestionType.SHORT_ANSWER, name: "단답형" },
  { id: QuestionType.LONG_ANSWER, name: "장문형" },
  { id: QuestionType.MULTIPLE_CHOICE, name: "객관식 질문" },
  { id: QuestionType.CHECK_BOX, name: "체크박스" },
  { id: QuestionType.DROP_DOWN, name: "드롭다운" },
];

type Props = {
  card: Question;
};
export default function QuestionCard({ card }: Props) {
  const handleCopyQuestion = () => {};
  const handleDeleteQuestion = () => {};
  const handleNecessary = () => {};
  const handleQuestionChange = () => {};
  const questionContent = "";
  const handleQuestionType = () => {};
  return (
    <div className="w-full px-5">
      <div className="flex mb-3">
        <input
          className="w-full min-w-150 text-l p-4 mr-3"
          type="text"
          placeholder="질문"
          value={questionContent}
          onChange={handleQuestionChange}
        />
        <div className="w-40">
          <SelectBox menu={menu} onChange={() => handleQuestionType} />
        </div>
      </div>
      {/* 드롭다운, 옵션 추가등에 따른 변경 */}
      <div className="flex justify-end items-center p-2 border-t border-slate-400">
        <CopyButton onClick={handleCopyQuestion} />
        <DeleteButton onClick={handleDeleteQuestion} />
        <ToggleButton checked={false} onChange={handleNecessary} />
      </div>
    </div>
  );
}
