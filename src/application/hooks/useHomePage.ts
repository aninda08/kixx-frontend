import { useState, useEffect } from 'react';
import { TeamStanding } from '../../infrastructure/interfaces/TeamStanding';
import { getCountries, getLeagues, getStandings } from '../../infrastructure/services';

interface Country {
  country_id: string;
  country_name: string;
  country_logo: string;
}

interface League {
  country_id: string;
  country_name: string;
  country_logo: string;
  league_id: string;
  league_name: string;
  league_logo: string;
  league_season: string;
}

interface UseHomePageReturn {
  countries: Country[];
  leagues: League[];
  selectedCountry: string;
  selectedLeague: string;
  standings: TeamStanding[];
  setSelectedCountry: (countryId: string) => void;
  setSelectedLeague: (leagueId: string) => void;
  selectedLeagueDetails: League | null;
}

export const useHomePage = (): UseHomePageReturn => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [leagues, setLeagues] = useState<League[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<string>('');
  const [selectedLeague, setSelectedLeague] = useState<string>('');
  const [standings, setStandings] = useState<TeamStanding[]>([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await getCountries();
        setCountries(response.countries);
      } catch (error) {
        console.error('Error fetching countries:', error);
        setCountries([]);
      }
    };

    fetchCountries();
  }, []);

  useEffect(() => {
    if (selectedCountry) {
      const fetchLeagues = async () => {
        try {
          const response = await getLeagues(selectedCountry);
          setLeagues(response.leagues);
        } catch (error) {
          console.error('Error fetching leagues:', error);
          setLeagues([]);
        }
      };

      fetchLeagues();
    } else {
      setLeagues([]);
    }
  }, [selectedCountry]);

  useEffect(() => {
    if (selectedLeague) {
      const fetchStandings = async () => {
        try {
          const response = await getStandings(selectedLeague);
          setStandings(response.standings);
        } catch (error) {
          console.error('Error fetching standings:', error);
          setStandings([]);
        }
      };

      fetchStandings();
    } else {
      setStandings([]);
    }
  }, [selectedLeague]);

  const selectedLeagueDetails = leagues.find(l => l.league_id === selectedLeague) || null;

  return {
    countries,
    leagues,
    selectedCountry,
    selectedLeague,
    standings,
    setSelectedCountry,
    setSelectedLeague,
    selectedLeagueDetails,
  } as const;
};
