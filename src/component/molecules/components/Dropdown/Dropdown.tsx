import React from 'react';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import { SelectItem } from '@component/atoms';

interface DropdownProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: Array<{
    id: string;
    name: string;
    logo: string;
  }>;
  disabled?: boolean;
}

export const Dropdown: React.FC<DropdownProps> = ({
  label,
  value,
  onChange,
  options,
  disabled = false,
}) => {
  return (
    <FormControl fullWidth>
      <InputLabel>{label}</InputLabel>
      <Select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        label={label}
        disabled={disabled}
      >
        <MenuItem value="">Select {label}</MenuItem>
        {options.map((option) => (
          <MenuItem key={option.id} value={option.id}>
            <SelectItem {...option} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
