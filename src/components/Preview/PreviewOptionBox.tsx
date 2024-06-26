import { SelectChangeEvent } from "@mui/material";
import { useAppDispatch } from "../../hooks/useRedux";
import { Question, QuestionType } from "../../types/survey";
import AnswerOption from "../QuestionOption/AnswerOption";
import PreviewListOption from "./PreviewListOption";
import SelectBox from "../SelectBox";
import { questionActions } from "../../store/slice/question";

type Props = {
  question: Question;
};
export default function PreviewOptionBox({ question }: Props) {
  const dispatch = useAppDispatch();
  const { type, options, id } = question;

  const getOptionList = (type: number) => {
    const optionList = options?.map((option) => (
      <PreviewListOption
        key={`${id}, ${option.id}`}
        question={question}
        type={type}
        questionId={id}
        id={option.id}
        content={option.content}
      />
    ));
    return optionList;
  };

  const handleAnswerOfDropDown = (e: SelectChangeEvent) => {
    dispatch(questionActions.setAnswerListOne({ id, oId: e.target.value }));
  };

  const switchOption = () => {
    switch (type) {
      case QuestionType.SHORT_ANSWER:
      case QuestionType.LONG_ANSWER:
        return (
          <AnswerOption type={type} questionId={id} location={"preview"} />
        );
      case QuestionType.MULTIPLE_CHOICE:
      case QuestionType.CHECK_BOX:
        return getOptionList(type);
      case QuestionType.DROP_DOWN:
        return (
          <SelectBox
            value={question.answerList[0]?.id}
            menu={question.options}
            onChange={handleAnswerOfDropDown}
          />
        );
      default:
        return;
    }
  };
  return <div className="my-4 w-full">{switchOption()}</div>;
}
