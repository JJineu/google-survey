import { useAppDispatch, useAppSelector } from "../hooks/useRedux";
import { Question } from "../types/survey";
import OptionBox from "./OptionBox";

type Props = {
  question: Question;
};
export default function PreviewQuestion({ question }: Props) {
  const dispatch = useAppDispatch();

  return (
    <div className="my-3 py-3 bg-white">
      <span>{question.title}</span>
      {question.isNecessary && <span className=" text-red-500">*</span>}
      {/* 답변 입력 */}
      <OptionBox cardId={question.id} type={question.type} />
    </div>
  );
}
