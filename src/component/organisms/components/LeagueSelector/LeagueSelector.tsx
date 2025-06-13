import React from 'react';
import { Box, Typography } from '@mui/material';
import styles from './LeagueSelector.module.scss';
import { Dropdown } from '@component/molecules';

interface LeagueSelectorProps {
  countries: Array<{
    country_id: string;
    country_name: string;
    country_logo: string;
  }>;
  leagues: Array<{
    league_id: string;
    league_name: string;
    league_logo: string;
  }>;
  selectedCountry: string;
  selectedLeague: string;
  setSelectedCountry: (value: string) => void;
  setSelectedLeague: (value: string) => void;
}

export const LeagueSelector: React.FC<LeagueSelectorProps> = ({
  countries,
  leagues,
  selectedCountry,
  selectedLeague,
  setSelectedCountry,
  setSelectedLeague,
}) => {
  return (
    <Box className={styles['league-selector']}>
      <Box className={styles['form-group']}>
        <Dropdown
          label="Country"
          value={selectedCountry}
          onChange={(value: string) => setSelectedCountry(value)}
          options={countries.map(country => ({
            id: country.country_id,
            name: country.country_name,
            logo: country.country_logo
          }))}
        />

        <Dropdown
          label="League"
          value={selectedLeague}
          onChange={(value: string) => setSelectedLeague(value)}
          options={leagues.map(league => ({
            id: league.league_id,
            name: league.league_name,
            logo: league.league_logo
          } as const))}
          disabled={!selectedCountry}
        />
      </Box>
    </Box>
  );
};
