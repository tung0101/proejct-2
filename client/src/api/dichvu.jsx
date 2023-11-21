import axios from 'axios';

const API_URL = 'http://localhost:8000';

export const fetchDichVu = async () => {
  try {
    const response = await axios.get(`${API_URL}/dichvu`);
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
export const fetchDichVuId = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/dichvu/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
export const fetchChiTietDichVuById = async (id) => {
    try {
      const response = await axios.get(`${API_URL}/chitietdichvu/${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  };
