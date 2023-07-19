import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { IconButton } from "@mui/material";

type Props = {
  onClick: () => void;
};
export default function DeleteButton({ onClick }: Props) {
  return (
    <div>
      <IconButton onClick={() => onClick()} aria-label="delete-question">
        <DeleteOutlinedIcon />
      </IconButton>
    </div>
  );
}
