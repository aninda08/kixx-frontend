import { apiService } from './axiosSetup';
import { StandingsResponse } from '../interfaces/StandingsResponse';
import { API_ENDPOINTS, ERROR_MESSAGES } from '../constants';

export const getStandings = async (leagueId: string): Promise<StandingsResponse> => {
  try {
    const response = await apiService.get(`${API_ENDPOINTS.STANDINGS}?leagueId=${leagueId}`);
    return response.data;
  } catch (error: any) {
    console.error('Error fetching standings:', error);
    throw new Error(
      error.response?.data?.message || 
      ERROR_MESSAGES.STANDINGS
    );
  }
};
