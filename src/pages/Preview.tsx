import { Button } from "@mui/material";
import { useAppSelector } from "../hooks/useRedux";
import PreviewQuestion from "../components/PreviewQuestion";
import { useNavigate } from "react-router-dom";

export default function Preview() {
  const router = useNavigate();
  const handleSubmit = () => {
    router("/result");
  };
  const handleReset = () => {};
  const { survey, question } = useAppSelector((state) => state);
  return (
    <div className="w-full overflow-x-hidden px-10">
      <div className="flex flex-col p-5 mx-auto justify-center items-center  max-w-screen-md ">
        <div className="w-full flex flex-col mx-3">
          {/* survey */}
          <div className="flex flex-col p-5 bg-white">
            <div className="text-2xl mb-2">{survey.title}</div>
            <div className="pb-2">{survey.detail}</div>
            <div className="text-red-500 pt-10 border-t border-slate-400">
              * 필수항목
            </div>
          </div>
          {/* questions */}
          <div className="">
            {question &&
              question.map((q) => <PreviewQuestion key={q.id} question={q} />)}
          </div>
        </div>
        {/* buttons */}
        <div className="w-full flex justify-between mt-3">
          <Button variant="contained" onClick={handleSubmit}>
            제출
          </Button>
          <Button variant="text" onClick={handleReset}>
            양식 지우기
          </Button>
        </div>
      </div>
    </div>
  );
}
