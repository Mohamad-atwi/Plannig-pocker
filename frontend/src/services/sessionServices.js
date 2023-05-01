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

export const createSession = async (title, password) => {
    try {
        const response = await axios.post(`${API_URL}/sessions`, {
            title: title,
            password: password
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

        if (response.status === 200) {
            sessionStorage.setItem('session', JSON.stringify(response.data.session));
        };

        return true;
    } catch (error) {
        return false;
    }
}

