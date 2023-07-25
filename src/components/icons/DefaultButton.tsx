import { Button } from "@mui/material";

type Props = {
  variant: "text" | "outlined" | "contained";
  onClick: () => void;
  text: string;
};
export default function DefaultButton({
  variant = "text",
  onClick,
  text,
}: Props) {
  return (
    <div>
      <Button variant={variant} onClick={onClick}>
        {text}
      </Button>
    </div>
  );
}
