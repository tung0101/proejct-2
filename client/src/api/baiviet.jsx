import axios from 'axios';

const API_URL = 'http://localhost:8000';

export const fetchBaiViet = async () => {
  try {
    const response = await axios.get(`${API_URL}/baiviet`);
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
export const fetchBaiVietById = async (id) => {
    try {
      const response = await axios.get(`${API_URL}/baiviet/${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  };