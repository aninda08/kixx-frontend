import React from 'react';
import { Box } from '@mui/material';

interface SelectItemProps {
  id: string;
  name: string;
  logo: string;
}

export const SelectItem: React.FC<SelectItemProps> = ({ id, name, logo }) => {
  return (
    <Box 
      display="flex" 
      alignItems="center" 
      gap={1}
      data-testid="select-item-container"
    >
      <img
        src={logo}
        alt={name}
        style={{ width: 20, height: 20 }}
      />
      {name}
    </Box>
  );
};
