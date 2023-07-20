import { FormControlLabel, Switch } from "@mui/material";

type Props = {
  checked: boolean;
  onChange: () => void;
};
export default function ToggleButton({ checked, onChange }: Props) {
  return (
    <FormControlLabel
      value="start"
      control={
        <Switch
          color="primary"
          aria-label="set-necessary"
          checked={checked}
          onChange={onChange}
        />
      }
      label="필수"
      labelPlacement="start"
    />
  );
}
