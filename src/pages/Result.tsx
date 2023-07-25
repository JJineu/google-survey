import { useAppSelector } from "../hooks/useRedux";
import ResultQuestion from "../components/ResultQeustion";

export default function ResultPage() {
  const { survey, question } = useAppSelector((state) => state);
  return (
    <div className="w-4/5 mx-auto overflow-x-hidden px-10">
      <div className="flex flex-col p-5 mx-auto justify-center items-center  max-w-screen-md ">
        <div className="w-full flex flex-col mx-3">
          {/* survey */}
          <div className="flex flex-col p-5 bg-white border-2 rounded-md">
            <div className="text-2xl mb-2">{survey.title}</div>
            <div className="pb-2">{survey.detail}</div>
            <div className="text-blue-500 pt-10 border-t border-slate-400">
              응답이 기록되었습니다.
            </div>
          </div>
          {/* questions */}
          <div className="flex flex-col">
            {question &&
              question.map((q) => <ResultQuestion key={q.id} question={q} />)}
          </div>
        </div>
      </div>
    </div>
  );
}
