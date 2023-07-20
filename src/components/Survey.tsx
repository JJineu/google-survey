import { useAppDispatch, useAppSelector } from "../hooks/useRedux";
import { surveyAction } from "../store/slice/survey";

export default function Survey() {
  const survey = useAppSelector((state) => state.survey);
  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(surveyAction.setSurvey({ ...survey, [name]: value }));
    console.log('survey')
  };

  return (
    <div className="flex flex-col p-5 bg-white ">
      <input
        type="text"
        className="text-3xl mb-4"
        placeholder="제목 없는 설문지"
        name="title"
        value={survey.title}
        onChange={handleChange}
      />
      <input
        type="text"
        className=""
        placeholder="설문지 설명"
        name="detail"
        value={survey.detail}
        onChange={handleChange}
      />
    </div>
  );
}
