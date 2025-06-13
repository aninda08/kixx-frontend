const API_BASE_URL = 'http://localhost:8081';

const API_ENDPOINTS = {
  COUNTRIES: '/api/v1/football-standings/countries',
  LEAGUES: '/api/v1/football-standings/leagues',
  STANDINGS: '/api/v1/football-standings/standings'
};

const API_TIMEOUT = 10000;

export {
  API_BASE_URL,
  API_ENDPOINTS,
  API_TIMEOUT
};
