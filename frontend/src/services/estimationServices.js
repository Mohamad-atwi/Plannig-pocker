import axios from 'axios';
import { API_URL } from '../config/environment';

export const getEstimations = async (sessionId) => {
    try {
        const response = await axios.get(`${API_URL}/sessions/${sessionId}/estimations`);

        return response.data.map((data) => {
            return {
                "id": data.id,
                "user_id": data.user_id,
                "session_id": data.session_id,
                "card_id": data.card_id,
                "username": data.user.username,
                "card": data.card.value,
            };
        });
    } catch (error) {
        console.error(error);
    }
};

export const saveEstimation = async (userId, cardId, sessionId) => {
    return await axios.post(`${API_URL}/user_estimations`, {
        // user_id: userId,
        card_id: cardId,
        session_id: sessionId
    });
}
