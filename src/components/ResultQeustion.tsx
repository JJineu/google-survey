import { Question, QuestionOption, QuestionType } from "../types/survey";

type Props = {
  question: Question;
};
export default function ResultQuestion({ question }: Props) {
  const { type, answer, answerList } = question;

  const getAnswerList = (answerList: QuestionOption[]) => {
    return answerList.map((answer) => <div>{answer.content}</div>);
  };
  const switchOption = () => {
    switch (type) {
      case QuestionType.SHORT_ANSWER:
      case QuestionType.LONG_ANSWER:
        return <div>{answer}</div>;
      case QuestionType.MULTIPLE_CHOICE:
        return <div>{answer}</div>;
      case QuestionType.CHECK_BOX:
        case QuestionType.DROP_DOWN:
        return getAnswerList(answerList);
      default:
        return;
    }
  };

  return (
    <div className="mt-3 p-5 bg-white border-2 rounded-md">
      <span className="">{question.title}</span>
      {question.isNecessary && <span className=" text-red-500"> *</span>}
      <div className="my-4 w-full">{switchOption()}</div>
    </div>
  );
}
