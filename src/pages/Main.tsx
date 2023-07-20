import Survey from "../components/Survey";
import QuestionList from "../components/QuestionList";
import SideBar from "../components/SideBar";
import PreviewButton from "../components/icons/PreviewButton";
import { useNavigate } from "react-router-dom";

export default function Main() {
  const router = useNavigate();
  const onPreview = () => {
    router("/preview");
  };
  return (
    <div className="w-full overflow-x-hidden">
      <div className="sticky top-0 bg-white z-10 flex justify-center">
        <PreviewButton onClick={onPreview} />
      </div>
      <div className="w-full flex flex-col mx-auto justify-center items-center bg-slate-200 sm:flex-row max-w-screen">
        <div className="basis-1/7"> </div>
        <div className="basis-5/7 flex flex-col bg-purple-100 mx-3">
          <Survey />
          <QuestionList />
        </div>
        <div className="basis-1/7">
          <SideBar />
        </div>
      </div>
    </div>
  );
}

// margin: 0 auto;
// max-width: 1440px;
// align-items: flex-start;
// margin-top: 140px;
// margin-bottom: 100px;
{
  /* <section className="w-full flex flex-col md:flex-row max-w-[850px] p-4">
<div className="w-full basis-3/4 min-w-0">
  <FollowingBar />
  <PostList />
</div>
<div className="basis-1/4 ml-8">
  <SideBar user={user} />
</div>
</section> */
}
