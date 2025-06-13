import React from 'react';
import { Box, Typography } from '@mui/material';
import styles from './Header.module.scss';
import { HEADER } from '@component/constants';
import { Logo } from '@component/atoms';

export const Header: React.FC = () => {
  return (
    <Box className={styles['banner']}>
      <Box className={styles['logo-container']}>
        <Logo src={HEADER.LOGO.SRC} alt={HEADER.LOGO.ALT} />
        <Typography variant="h1" className={styles['logo-text']}>
          {HEADER.TEXT.TITLE}
        </Typography>
        <Typography variant="subtitle1" className={styles['subtitle']}>
          {HEADER.TEXT.SUBTITLE}
        </Typography>
      </Box>
    </Box>
  );
};
