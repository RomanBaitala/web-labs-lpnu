import axios from 'axios'

export const fetchCarById = async (id) => {
    try {
      const response = await axios.get(`/car/${id}`);
      return response.data.data.car; 
    } catch (error) {
      console.error("Error fetching car data:", error);
      throw error;
    }
  };