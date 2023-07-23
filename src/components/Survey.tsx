import { useAppDispatch, useAppSelector } from "../hooks/useRedux";
import { surveyAction } from "../store/slice/survey";

export default function Survey() {
  const survey = useAppSelector((state) => state.survey);
  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(surveyAction.setSurvey({ ...survey, [name]: value }));
  };

  return (
    <div className="flex flex-col p-5 bg-white border-2 rounded-md focus-within:border-l-red-400">
      <input
        type="text"
        className="text-3xl mb-4 focus:border-b-2 focus:border-purple-500 outline-none"
        placeholder="제목 없는 설문지"
        name="title"
        value={survey.title}
        onChange={handleChange}
      />
      <input
        type="text"
        className="focus:border-b-2 focus:border-purple-500 outline-none"
        placeholder="설문지 설명"
        name="detail"
        value={survey.detail}
        onChange={handleChange}
      />
    </div>
  );
}
