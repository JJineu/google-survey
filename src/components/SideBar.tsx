import ControlPointIcon from "@mui/icons-material/ControlPoint";
import { IconButton } from "@mui/material";

export default function SideBar() {
  return (
    <div>
      {/* 질문추가 */}
      <IconButton
        onClick={() => {
          alert("clicked");
        }}
        aria-label="create-questionCard"
      >
        <ControlPointIcon />
      </IconButton>
    </div>
  );
}
