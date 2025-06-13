export interface StandingsResponse {
  standings: Standing[];
}

export interface Standing {
  country_name: string;
  league_id: string;
  league_name: string;
  team_id: string;
  team_name: string;
  team_badge: string;
  league_round: string;
  fk_stage_key: string;
  stage_name: string;
  overall_promotion: string;
  overall_league_position: string;
  overall_league_payed: string;
  overall_league_W: string;
  overall_league_D: string;
  overall_league_L: string;
  overall_league_GF: string;
  overall_league_GA: string;
  overall_league_PTS: string;
  home_league_position: string;
  home_promotion: string;
  home_league_payed: string;
  home_league_W: string;
  home_league_D: string;
  home_league_L: string;
  home_league_GF: string;
  home_league_GA: string;
  home_league_PTS: string;
  away_league_position: string;
  away_promotion: string;
  away_league_payed: string;
  away_league_W: string;
  away_league_D: string;
  away_league_L: string;
  away_league_GF: string;
  away_league_GA: string;
  away_league_PTS: string;
}

export interface StandingsTableProps {
  standings: Standing[];
  tabValue: number;
  onTabChange: (event: React.SyntheticEvent, newValue: number) => void;
}

export interface StandingsData {
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
