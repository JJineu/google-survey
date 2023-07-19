import ControlPointIcon from "@mui/icons-material/ControlPoint";
import { IconButton } from "@mui/material";

type Props ={
  onClick: () => void
}
export default function AddButton({onClick}: Props) {
  return (
    <div>
      <IconButton
        onClick={() => onClick()}
        aria-label="create-question"
      >
        <ControlPointIcon />
      </IconButton>
    </div>
  );
}