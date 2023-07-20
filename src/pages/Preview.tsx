import { Button } from "@mui/material";

export default function Preview() {
  return (
    <div className="flex flex-col">
      <div>{/* 미리보기 */}</div>
      <div className="flex justify-between">
        <Button variant="contained">제출</Button>
        <Button variant="text">양식 지우기</Button>
      </div>
    </div>
  );
}
