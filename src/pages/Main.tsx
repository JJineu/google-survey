import Survey from "../components/Survey";
import QuestionList from "../components/QuestionList";
import SideBar from "../components/SideBar";

export default function Main() {
  return (
    <div>
      {/* 서베이 */}
      <Survey />
      {/* 질문리스트 */}
      <QuestionList />
      {/* 질문추가 사이드바 */}
      <SideBar />
    </div>
  );
}
