import axios from 'axios';
import { API_URL } from '../config/environment';

export const getSession = async (sessionId) => {
    try {
        const response = await axios.get(`${API_URL}/sessions/${sessionId}`);

        alert("sdf");
        return response.data;
    } catch (error) {
        console.error(error);
    }
};
