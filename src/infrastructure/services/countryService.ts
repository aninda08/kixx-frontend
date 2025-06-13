import { apiService } from './axiosSetup';
import { Country } from '../interfaces/Country';
import { API_ENDPOINTS, ERROR_MESSAGES } from '../constants';

export const getCountries = async (): Promise<{ countries: Country[] }> => {
  try {
    const response = await apiService.get(API_ENDPOINTS.COUNTRIES);
    return response.data;
  } catch (error: any) {
    console.error('Full error details:', error);
    console.error('Response data:', error.response?.data);
    console.error('Status:', error.response?.status);
    throw new Error(
      error.response?.data?.message || 
      ERROR_MESSAGES.COUNTRIES
    );
  }
};
