import { Question } from "../../types/survey";
import PreviewOptionBox from "./PreviewOptionBox";

type Props = {
  question: Question;
};
export default function PreviewQuestion({ question }: Props) {
  return (
    <div
      className={`mt-3 p-5 bg-white border-2 rounded-md ${
        question.isNecessary &&
        !question.answer &&
        question.answerList.length === 0
          ? "border-red-400"
          : ""
      }`}
    >
      <span className="">{question.title}</span>
      {question.isNecessary && <span className=" text-red-500"> *</span>}
      <PreviewOptionBox question={question} />
    </div>
  );
}
