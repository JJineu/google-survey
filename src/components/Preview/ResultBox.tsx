import { Question, QuestionType } from "../../types/survey";
import AnswerOption from "../QuestionOption/AnswerOption";

type Props = {
  question: Question;
};
export default function ResultBox({ question }: Props) {
  const { id, type, answer, answerList } = question;

  const switchOption = () => {
    switch (type) {
      case QuestionType.SHORT_ANSWER:
        return <AnswerOption type={type} questionId={id} location={"result"} />;
      case QuestionType.LONG_ANSWER:
        return <AnswerOption type={type} questionId={id} location={"result"} />;
      case QuestionType.MULTIPLE_CHOICE:
        return <div>{answer}</div>;
      case QuestionType.CHECK_BOX:
        return <div>{answerList}</div>;
      case QuestionType.DROP_DOWN:
        return <div>{answer}</div>;
      default:
        return;
    }
  };

  return (
    <div className="mt-3 p-5 bg-white">
      <span className="">{question.title}</span>
      {question.isNecessary && <span className=" text-red-500"> *</span>}
      <div className="my-4 w-full">{switchOption()}</div>
    </div>
  );
}
