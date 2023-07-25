import { useAppSelector } from "../hooks/useRedux";
import QuestionCard from "./QuestionCard";

export default function QuestionList() {
  const question = useAppSelector((state) => state.question);

  return (
    <div className="w-full">
      <ul>
        {question &&
          question.map((q, idx) => (
            <li
              key={q.id}
              className="my-3 py-3 bg-white border-2 rounded-md focus-within:border-l-red-400"
            >
              <QuestionCard key={q.id} card={q} />
            </li>
          ))}
      </ul>
    </div>
  );
}