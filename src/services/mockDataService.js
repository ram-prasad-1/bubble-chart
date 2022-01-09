import mockData from '@/utils/mocks/data.json';
import axios from 'axios';

export const getMockData = async () => {
  try {
    const response = await axios.get('https://mocki.io/v1/18936d28-2f79-4840-b146-5622e8ad1e77');
    return response.data;
    // return mockData;
  } catch (error) {
    console.error(error);
  }
};
