import { useAppDispatch } from "../hooks/useRedux";
import { Question, QuestionOption, QuestionType } from "../types/survey";
import MulipleChoice from "./QuestionOption/MulipleChoice";
import CheckBox from "./QuestionOption/CheckBox";
import DropDown from "./QuestionOption/DropDown";
import AnswerOption from "./QuestionOption/AnswerOption";
import ListOption from "./QuestionOption/ListOption";

type Props = {
  cardId: string;
  type: number;
  options?: QuestionOption[];
};
export default function OptionBox({ cardId, type, options }: Props) {
  const dispatch = useAppDispatch();

  const getOptionList = (type: number) => {
    console.log('type')
    const lastOptionIndex = (options?.length || 0) + 1;
    console.log(lastOptionIndex)
    const optionList = options
      ?.map((option) => (
        <ListOption
          type={type}
          questionId={cardId}
          location="main"
          optionId={option.id}
          content={option.content}
          isLast
        />
      ))
      .concat(
        <ListOption
          type={type}
          questionId={cardId}
          location="main"
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
        return <AnswerOption type={type} questionId={cardId} location="main" />;
      case QuestionType.LONG_ANSWER:
        return <AnswerOption type={type} questionId={cardId} location="main" />;
      // case QuestionType.MULTIPLE_CHOICE:
      //   return getOptionList(type);
      // case QuestionType.CHECK_BOX:
      //   return getOptionList(type);
      // case QuestionType.DROP_DOWN:
      //   return getOptionList(type);
      default:
        return;
    }
  };
  return <div className="my-4">{switchOption()}</div>;
}
