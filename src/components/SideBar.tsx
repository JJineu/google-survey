import { useAppDispatch } from "../hooks/useRedux";
import { questionActions } from "../store/slice/question";
import AddButton from "./icons/AddButton";
import { v4 } from "uuid";

export default function SideBar() {
  const dispatch = useAppDispatch();

  const newQuestion = (id: string) => ({
    id,
    type: 2,
    options: [
      {
        id: 1,
        content: "옵션 1",
      },
    ],
    isNecessary: false,
    answer: "",
    answerList: [],
  });

  const handleAddQuestion = () => {
    const id = v4();
    dispatch(questionActions.addQuestion(newQuestion(id)));
  };

  return (
    <div>
      <AddButton onClick={handleAddQuestion} />
    </div>
  );
}
