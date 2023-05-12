import axios from "axios";
import { API_URL } from "../config/environment";

export const getStories = async (sessionId) => {

    try {
        const response = await axios.get(`${API_URL}/stories/session/${sessionId}`);
        return response.data.storie.map((data) => {
            return { id: data.id, text: data.text, session_id: data.session_id };
        });
    } catch (error) {
        console.error(error);
    }
}