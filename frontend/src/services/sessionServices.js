import axios from 'axios';
import { API_URL } from '../config/environment';

export const getSession = async (sessionId) => {
    try {
        const response = await axios.get(`${API_URL}/sessions/${sessionId}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export const getSessionsByUser = async (userId) => {
    try {
      const response = await axios.get(`${API_URL}/users/${userId}/sessions`);
      return response.data.sessions;
    } catch (error) {
      console.error(error);
    }
  };
  
  

export const createSession = async (title, password) => {
    const ownerId = JSON.parse(sessionStorage.getItem("user")).id;
    console.log(ownerId);
    try {
        const response = await axios.post(`${API_URL}/sessions`, {
            title: title,
            password: password,
            owner_id: ownerId
        }, {
            headers: {
                'Cache-Control': 'no-cache'
            }
        });
        return response;
    } catch (error) {
        return [];
    }
}

export const Join = async (connectionId, password) => {
    try {
        const response = await axios.post(`${API_URL}/join`, {
            connectionId: connectionId,
            password: password
        })

        return response;
    } catch (error) {
        return false;
    }
}

