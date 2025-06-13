import React from 'react';
import {
  Box,
  Typography,
} from '@mui/material';

import styles from './HomePage.module.scss';
import { Header, LeagueSelector, StandingsTable } from '@component/organisms';
import { useHomePage } from '@app/hooks';

export const HomePage: React.FC = () => {
  const {
    countries,
    leagues,
    selectedCountry,
    selectedLeague,
    standings,
    setSelectedCountry,
    setSelectedLeague,
    selectedLeagueDetails,
  } = useHomePage();

  return (
    <Box className={styles['home-page']}>
      <Header />
      
      <LeagueSelector
        countries={countries}
        leagues={leagues}
        selectedCountry={selectedCountry}
        selectedLeague={selectedLeague}
        setSelectedCountry={setSelectedCountry}
        setSelectedLeague={setSelectedLeague}
      />

      {selectedLeague && (
        <Box mt={4}>
          <Typography variant="h4" mb={2}>
            {selectedLeagueDetails?.league_name} Standings
          </Typography>
          <Box mt={2}>
            <StandingsTable standings={standings} />
          </Box>
        </Box>
      )}
    </Box>
  );
};
