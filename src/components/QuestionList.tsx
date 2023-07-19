import { useAppSelector } from "../hooks/useRedux";
import QuestionCard from "./QuestionCard";

export default function QuestionList() {
  const question = useAppSelector((state) => state.question);

  return (
    <div>
      {question.map((q, idx) => (
        <li key={idx}>
          <QuestionCard card={q} />
        </li>
      ))}
    </div>
  );
}
