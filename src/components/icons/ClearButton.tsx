import { IconButton } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

type Props = {
  onClick: () => void;
};
export default function ClearButton({ onClick }: Props) {
  return (
    <div>
      <IconButton onClick={() => onClick()} aria-label="delete-option">
        <ClearIcon />
      </IconButton>
    </div>
  );
}
