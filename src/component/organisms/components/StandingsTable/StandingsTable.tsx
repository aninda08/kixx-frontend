import React from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tabs, Tab, Tooltip } from '@mui/material';
import { tabValueToNumber, useStandings } from '@app/hooks';
import { LeagueTabValue } from '@commons/types';

interface Header {
  label: string;
  tooltip: string;
}

interface StandingsTableProps {
  standings: Standing[];
}

interface Standing {
  team_id: string;
  team_name: string;
  team_badge: string;
  stage_name: string;
  overall_league_position: string;
  overall_league_payed: string;
  overall_league_W: string;
  overall_league_D: string;
  overall_league_L: string;
  overall_league_GF: string;
  overall_league_GA: string;
  overall_league_PTS: string;
  home_league_position: string;
  home_league_payed: string;
  home_league_W: string;
  home_league_D: string;
  home_league_L: string;
  home_league_GF: string;
  home_league_GA: string;
  home_league_PTS: string;
  away_league_position: string;
  away_league_payed: string;
  away_league_W: string;
  away_league_D: string;
  away_league_L: string;
  away_league_GF: string;
  away_league_GA: string;
  away_league_PTS: string;
}

interface StandingsData {
  position: string;
  team: string;
  stage: string;
  gp: string;
  w: string;
  d: string;
  l: string;
  f: string;
  a: string;
  gd: string;
  pts: string;
}

// type TabValue = 'overall' | 'home' | 'away';

// const tabValueToNumber = (tabValue: TabValue): number => {
//   switch (tabValue) {
//     case 'overall':
//       return 0;
//     case 'home':
//       return 1;
//     case 'away':
//       return 2;
//     default:
//       return 0;
//   }
// };


const getStandingsData = (standing: Standing, tabValue: LeagueTabValue): StandingsData => {
  switch (tabValue) {
    case 'overall':
      return {
        position: standing.overall_league_position,
        team: standing.team_name,
        stage: standing.stage_name,
        gp: standing.overall_league_payed,
        w: standing.overall_league_W,
        d: standing.overall_league_D,
        l: standing.overall_league_L,
        f: standing.overall_league_GF,
        a: standing.overall_league_GA,
        gd: String(Number(standing.overall_league_GF) - Number(standing.overall_league_GA)),
        pts: standing.overall_league_PTS,
      };
    case 'home':
      return {
        position: standing.home_league_position,
        team: standing.team_name,
        stage: standing.stage_name,
        gp: standing.home_league_payed,
        w: standing.home_league_W,
        d: standing.home_league_D,
        l: standing.home_league_L,
        f: standing.home_league_GF,
        a: standing.home_league_GA,
        gd: String(Number(standing.home_league_GF) - Number(standing.home_league_GA)),
        pts: standing.home_league_PTS,
      };
    case 'away':
      return {
        position: standing.away_league_position,
        team: standing.team_name,
        stage: standing.stage_name,
        gp: standing.away_league_payed,
        w: standing.away_league_W,
        d: standing.away_league_D,
        l: standing.away_league_L,
        f: standing.away_league_GF,
        a: standing.away_league_GA,
        gd: String(Number(standing.away_league_GF) - Number(standing.away_league_GA)),
        pts: standing.away_league_PTS,
      };
    default:
      return {
        position: '',
        team: '',
        stage: '',
        gp: '',
        w: '',
        d: '',
        l: '',
        f: '',
        a: '',
        gd: '',
        pts: '',
      };
  }
};

export const StandingsTable: React.FC<StandingsTableProps> = ({ standings }) => {

  const { tabValue, onTabChange } = useStandings();
  if (!standings) return null;

  const headers: Header[] = [
    { label: 'P', tooltip: 'Position' },
    { label: 'Team', tooltip: '' },
    { label: 'Stage', tooltip: 'Stage Name' },
    { label: 'GP', tooltip: 'Games Played' },
    { label: 'W', tooltip: 'Won' },
    { label: 'D', tooltip: 'Drawn' },
    { label: 'L', tooltip: 'Lost' },
    { label: 'F', tooltip: 'Goals For' },
    { label: 'A', tooltip: 'Goals Against' },
    { label: 'GD', tooltip: 'Goal Difference' },
    { label: 'Pts', tooltip: 'Points' },
  ];

  const sortedStandings = standings
    .map((standing: Standing) => ({
      ...standing,
      data: getStandingsData(standing, tabValue),
    }))
    .sort((a: Standing & { data: StandingsData }, b: Standing & { data: StandingsData }) => {
      if (a.stage_name !== b.stage_name) {
        return a.stage_name.localeCompare(b.stage_name);
      }
      return Number(a.data.position) - Number(b.data.position);
    });

  return (
    <Box>
      <Tabs value={tabValueToNumber(tabValue)} onChange={onTabChange}>
        <Tab label="Overall" value={0} />
        <Tab label="Home" value={1} />
        <Tab label="Away" value={2} />
      </Tabs>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {headers.map((header) => (
                <TableCell key={header.label}>
                  <Tooltip title={header.tooltip}>
                    <span>{header.label}</span>
                  </Tooltip>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedStandings.map((standing: Standing & { data: StandingsData }, index: number) => (
              <TableRow key={standing.team_id}>
                <TableCell align="left">{standing.data.position}</TableCell>
                <TableCell align="left">
                  <Box display="flex" alignItems="center" gap={1}>
                    <img
                      src={standing.team_badge}
                      alt={standing.team_name}
                      style={{ width: 20, height: 20 }}
                    />
                    {standing.team_name}
                  </Box>
                </TableCell>
                <TableCell align="left">{standing.stage_name}</TableCell>
                <TableCell align="right">{standing.data.gp}</TableCell>
                <TableCell align="right">{standing.data.w}</TableCell>
                <TableCell align="right">{standing.data.d}</TableCell>
                <TableCell align="right">{standing.data.l}</TableCell>
                <TableCell align="right">{standing.data.f}</TableCell>
                <TableCell align="right">{standing.data.a}</TableCell>
                <TableCell align="right">{standing.data.gd}</TableCell>
                <TableCell align="right">{standing.data.pts}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default StandingsTable;
