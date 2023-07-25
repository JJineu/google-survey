import Survey from "../components/Survey";
import QuestionList from "../components/QuestionList";
import SideBar from "../components/SideBar";
import PreviewButton from "../components/icons/PreviewButton";
import { useNavigate } from "react-router-dom";

export default function MainPage() {
  const router = useNavigate();
  const onPreview = () => {
    router("/preview");
  };
  return (
    <div className="w-full">
      <div className="sticky top-0 bg-white z-10 flex justify-center">
        <PreviewButton onClick={onPreview} />
      </div>
      <div className="w-full flex flex-col p-5 mx-auto justify-center items-center sm:flex-row max-w-screen-md">
        <div className="mx-3"></div>
        <div className="w-full mx-3 flex flex-col">
          <Survey />
          <QuestionList />
        </div>
        <div className="">
          <SideBar />
        </div>
      </div>
    </div>
  );
}
