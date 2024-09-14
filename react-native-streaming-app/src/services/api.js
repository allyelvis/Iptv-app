import axios from 'axios';

const API_URL = 'https://your-backend-api.com';

export const fetchLiveTVData = async () => {
  try {
    const response = await axios.get(`${API_URL}/livetv`);
    return response.data;
  } catch (error) {
    console.error('Error fetching live TV data:', error);
    throw error;
  }
};
