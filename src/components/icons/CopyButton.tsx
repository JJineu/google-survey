import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { IconButton } from "@mui/material";

type Props = {
  onClick: () => void;
};
export default function CopyButton({ onClick }: Props) {
  return (
    <div>
      <IconButton onClick={() => onClick()} aria-label="copy-question">
        <ContentCopyIcon fontSize="small"/>
      </IconButton>
    </div>
  );
}
