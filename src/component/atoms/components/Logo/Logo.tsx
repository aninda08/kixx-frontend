import React from 'react';
import styles from './Logo.module.scss';
import '../../styles/index.scss';

interface LogoProps {
  src: string;
  alt: string;
}

export const Logo: React.FC<LogoProps> = ({ src, alt }) => {
  return (
    <img 
      src={src} 
      alt={alt} 
      className={`${styles.logo} atom-component`}
    />
  );
};
