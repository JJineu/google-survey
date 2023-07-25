import { ChangeEvent, useEffect, useState } from "react";
import useDebounce from "../hooks/useDebounce";
import { useAppDispatch, useAppSelector } from "../hooks/useRedux";
import { surveyAction } from "../store/slice/survey";

export default function Survey() {
  const dispatch = useAppDispatch();
  const survey = useAppSelector((state) => state.survey);

  const [formState, setFormState] = useState({
    title: survey.title,
    detail: survey.detail,
  });
  const debouncedFormState = useDebounce(formState);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((prevFormState) => ({ ...prevFormState, [name]: value }));
  };

  useEffect(() => {
    dispatch(
      surveyAction.setSurvey({
        title: debouncedFormState.title,
        detail: debouncedFormState.detail,
      })
    );
  }, [debouncedFormState, dispatch]);

  return (
    <div className="flex flex-col p-5 bg-white border-2 rounded-md focus-within:border-l-red-400">
      <input
        type="text"
        className="text-3xl mb-4 focus:border-b-2 focus:border-purple-500 outline-none"
        placeholder="제목 없는 설문지"
        name="title"
        value={formState.title}
        onChange={handleInputChange}
      />
      <input
        type="text"
        className="focus:border-b-2 focus:border-purple-500 outline-none"
        placeholder="설문지 설명"
        name="detail"
        value={formState.detail}
        onChange={handleInputChange}
      />
    </div>
  );
}
