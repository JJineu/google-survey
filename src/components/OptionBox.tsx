import { QuestionOption, QuestionType } from "../types/survey";
import AnswerOption from "./QuestionOption/AnswerOption";
import ListOption from "./QuestionOption/ListOption";

type Props = {
  cardId: string;
  type: number;
  options: QuestionOption[];
};
export default function OptionBox({ type, options, cardId }: Props) {

  const getOptionList = (type: number) => {
    const lastOptionIndex = (options?.length || 0) + 1;
    const optionList = options
      ?.map((option, idx) => (
        <ListOption
          key={`${cardId}, ${option._id}`}
          idx={idx + 1}
          type={type}
          questionId={cardId}
          _id={option._id}
          optionId={option.id}
          content={option.content}
          isLast={false}
        />
      ))
      .concat(
        <ListOption
          key={`${cardId}, ${lastOptionIndex}`}
          idx={lastOptionIndex}
          type={type}
          questionId={cardId}
          optionId={lastOptionIndex}
          content="옵션 추가"
          isLast={true}
        />
      );
    return optionList;
  };

  const switchOption = () => {
    switch (type) {
      case QuestionType.SHORT_ANSWER:
      case QuestionType.LONG_ANSWER:
        return (
          <AnswerOption type={type} questionId={cardId} location={"main"} />
        );
      case QuestionType.MULTIPLE_CHOICE:
      case QuestionType.CHECK_BOX:
      case QuestionType.DROP_DOWN:
        return getOptionList(type);
      default:
        return;
    }
  };
  return <div className="my-4 w-full ">{switchOption()}</div>;
}
