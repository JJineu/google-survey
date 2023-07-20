import { useAppSelector } from "../hooks/useRedux";
import PreviewQuestion from "../components/Preview/PreviewQuestion";

export default function Result() {
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
              * 표시는 필수 질문임
            </div>
          </div>
          {/* questions */}
          <div className="">
            {question &&
              question.map((q) => <PreviewQuestion key={q.id} question={q} />)}
          </div>
        </div>
      </div>
    </div>
  );
}
