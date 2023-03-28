import axios from 'axios';
import { API_URL } from '../config/environment';

export const getCardsOfDeck = async (deckId) => {
    try {
        const response = await axios.get(`${API_URL}/decks/${deckId}/cards`);
        return response;
    } catch (error) {
        console.error(error);
    }
};
