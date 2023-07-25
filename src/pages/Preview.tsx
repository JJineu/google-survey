import { useAppDispatch, useAppSelector } from "../hooks/useRedux";
import PreviewQuestion from "../components/Preview/PreviewQuestion";
import { useNavigate } from "react-router-dom";
import { questionActions } from "../store/slice/question";
import DefaultButton from "../components/icons/DefaultButton";

export default function PreviewPage() {
  const router = useNavigate();
  const dispatch = useAppDispatch();
  const { survey, question } = useAppSelector((state) => state);

  const handleSubmit = () => {
    let isFilled = true;
    question.forEach((q) => {
      if (q.isNecessary && !q.answer && q.answerList.length === 0) {
        isFilled = false;
      }
    });
    if (isFilled) {
      router("/result");
    } else {
      alert("필수 질문에 대한 답변을 채워주세요");
    }
  };
  const handleReset = () => {
    dispatch(questionActions.resetAnswer());
  };

  return (
    <div className="w-4/5 mx-auto overflow-x-hidden px-10">
      <div className="flex flex-col p-5 mx-auto justify-center items-center  max-w-screen-md ">
        <div className="w-full flex flex-col mx-3">
          {/* survey */}
          <div className="flex flex-col p-5 bg-white border-2 rounded-md ">
            <div className="text-2xl mb-2">{survey.title}</div>
            <div className="pb-2">{survey.detail}</div>
            <div className="text-red-500 pt-10 border-t border-slate-400">
              * 표시는 필수 질문임
            </div>
          </div>
          {/* questions */}
          <div className="flex flex-col">
            {question &&
              question.map((q) => <PreviewQuestion key={q.id} question={q} />)}
          </div>
        </div>
        {/* buttons */}
        <div className="w-full flex justify-between mt-3">
          <DefaultButton
            variant="contained"
            onClick={handleSubmit}
            text="제출"
          />
          <DefaultButton
            variant="text"
            onClick={handleReset}
            text="양식 지우기"
          />
        </div>
      </div>
    </div>
  );
}
