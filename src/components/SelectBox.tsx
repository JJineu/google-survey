import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

type Props = {
  value: string;
  menu: { id: number; content: string }[];
  onChange: (e: SelectChangeEvent) => void;
};
export default function SelectBox({ value, menu, onChange }: Props) {
  return (
    <FormControl fullWidth>
      <Select onChange={onChange} value={value}>
        {menu.map((m) => (
          <MenuItem key={m.id} value={m.id}>
            {m.content}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
