import { apiService } from './axiosSetup';
import { League } from '../interfaces/League';
import { API_ENDPOINTS, ERROR_MESSAGES } from '../constants';

export const getLeagues = async (countryId: string): Promise<{ leagues: League[] }> => {
  try {
    const response = await apiService.get(`${API_ENDPOINTS.LEAGUES}?countryId=${countryId}`);
    return response.data;
  } catch (error: any) {
    console.error('Full error details:', error);
    console.error('Response data:', error.response?.data);
    console.error('Status:', error.response?.status);
    throw new Error(
      error.response?.data?.message || 
      ERROR_MESSAGES.LEAGUES
    );
  }
};
