import { useState } from "react";
import { LeagueTabValue } from "@commons/types";

export const numberToTabValue = (value: number): LeagueTabValue => {
  const mapping: Record<number, LeagueTabValue> = {
    0: 'overall',
    1: 'home',
    2: 'away',
  };
  return mapping[value] || 'overall';
};

export const tabValueToNumber = (tabValue: LeagueTabValue): number => {
  switch (tabValue) {
    case 'overall':
      return 0;
    case 'home':
      return 1;
    case 'away':
      return 2;
    default:
      return 0;
  }
};

export const useStandings = () => {
    const [tabValue, setTabValue] = useState<LeagueTabValue>('overall');
    
    const onTabChange = (_: React.SyntheticEvent, newValue: number) => {
        const newTabValue = numberToTabValue(newValue);
        setTabValue(newTabValue);
      };

    return {
        tabValue,
        onTabChange,
    };
};
