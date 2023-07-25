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

// import { useAppSelector } from "../hooks/useRedux";
// import { Question } from "../types/survey";
// import DraggableList from "./DraggableList";
// import QuestionCard from "./QuestionCard";

// export default function QuestionList() {
//   const question = useAppSelector((state) => state.question);

//   type ListItem = {
//     id: number;
//     content: Question;
//   };

//   const draggableQuestions: ListItem[] = question.map((q, idx) => ({
//     id: idx,
//     content: q,
//   }));
//   const renderItem = (item: ListItem) => {
//     return (
//       <div>
//         <li
//           key={item.id}
//           className="my-3 py-3 bg-white border-2 rounded-md focus-within:border-l-red-400"
//         >
//           <QuestionCard key={item.id} card={item.content} />
//         </li>
//       </div>
//     );
//   };

//   return (
//     <div className="w-full">
//       <ul>
//         {
//           <DraggableList<ListItem>
//             items={draggableQuestions}
//             renderItem={renderItem}
//           />
//         }
//       </ul>
//     </div>
//   );
// }
