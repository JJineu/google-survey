import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { IconButton } from "@mui/material";

type Props = {
  onClick: () => void;
};
export default function PreviewButton({ onClick }: Props) {
  return (
    <div>
      <IconButton onClick={onClick} aria-label="preview">
        <VisibilityOutlinedIcon />
      </IconButton>
    </div>
  );
}
