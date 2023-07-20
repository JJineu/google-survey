import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

type Props = {
  menu: { id: number; name: string }[];
  onChange: () => {};
};
export default function SelectBox({ menu, onChange }: Props) {
  return (
    <FormControl fullWidth>
      {/* <InputLabel >Age</InputLabel> */}
      <Select
        // value={option}
        onChange={onChange}
      >
        {menu.map((m) => (
          <MenuItem key={m.id} value={m.id}>
            {m.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
