import { FormControl, MenuItem, Select, SelectChangeEvent } from "@mui/material";

type Props = {
  value: number;
  menu: { typeId: number; name: string }[];
  onChange: (e:SelectChangeEvent) => void;
};
export default function SelectBox({ value, menu, onChange }: Props) {

  return (
    <FormControl fullWidth>
      <Select onChange={onChange} value={value.toString()}>
        {menu.map((m) => (
          <MenuItem key={m.typeId} value={m.typeId}>
            {m.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
