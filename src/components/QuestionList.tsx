import { useAppSelector } from "../hooks/useRedux";
import QuestionCard from "./QuestionCard";

export default function QuestionList() {
  const question = useAppSelector((state) => state.question);

  return (
    <div className="w-full">
      <ul>
        {question.map((q, idx) => (
          <li key={idx} className="my-3">
            <QuestionCard card={q} />
          </li>
        ))}
      </ul>
    </div>
  );
}
