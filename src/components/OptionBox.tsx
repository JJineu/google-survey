import { ChangeEvent } from "react";
import { useAppDispatch } from "../hooks/useRedux";
import { questionActions } from "../store/slice/question";
import { Question, QuestionOption, QuestionType } from "../types/survey";

type Props = {
  card: Question;
  type: number;
  options?: QuestionOption[];
};
export default function OptionBox({ card, type, options }: Props) {
  const dispatch = useAppDispatch();

  const getOptionList = (type: number) => {
    // const handleOptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    //   dispatch(questionActions.setOption({ id: card.id, optionId }));
    // };
    // const handleAddOption = () => {
    //   dispatch(
    //     questionActions.addOption({
    //       id: card.id,
    //       optionId: option.,
    //       option: content,
    //     })
    //   );
    // };
    const optionList = options?.map((option) => (
      <input
        type="text"
        value={option.content}
        // onChange={handleOptionChange}
        // onClick={handleAddOption}
      />
    ));
    return optionList;
  };

  const getOptionText = (type: number) => {
    return (
      <input
        type="text"
        placeholder={type === 0 ? "단답형 텍스트" : "장문형 텍스트"}
        disabled
      />
    );
  };
  const switchOption = () => {
    switch (card.type) {
      case QuestionType.SHORT_ANSWER:
      case QuestionType.LONG_ANSWER:
        return getOptionText(card.type);
      case QuestionType.MULTIPLE_CHOICE:
      case QuestionType.CHECK_BOX:
      case QuestionType.DROP_DOWN:
        return getOptionList(card.type);
      default:
        return;
    }
  };
  return <div>{switchOption()}</div>;
}
