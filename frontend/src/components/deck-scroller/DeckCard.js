import * as React from "react";
import { useState, useEffect } from "react";
import * as cadrServices from "../../services/cardServices";
import * as sessionServices from "../../services/estimationServices";
import HowToVoteIcon from '@mui/icons-material/HowToVote';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

import { Button } from '@mui/material';
import Box from "@mui/material/Box";
import "./DeckCard.css";
import BasicCard from "../card";

export default function Deck({ deckId, selectedCard, setSelectedCard, hasVoted, setHasVoted, refreshEstimations }) {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      const data = await cadrServices.getCardsOfDeck(deckId);
      setCards(data);
    };
    fetchCards();
  }, []);

  const handleReset = () => {
    // Handle reset here
    setSelectedCard(null);
    setHasVoted(false);
  };

  const handleVote = (event) => {
    event.preventDefault();
    const user = JSON.parse(sessionStorage.user)
      sessionServices.saveEstimation(user.id, selectedCard.id, 1)
      .then(response => {
        console.log('Vote saved successfully:', response.data);
        refreshEstimations();
        setHasVoted(true);
      })
      .catch(error => {
        alert("Error while voting!");
      });
  };

  function showAlert() {
    alert("You already voted !");
  }

  return (
    <div className="Deck">
      <Box display="flex" justifyContent="flex-end">
        {selectedCard && !hasVoted && (
          <Button variant="outlined" startIcon={<RestartAltIcon />} onClick={handleReset} disabled={!selectedCard && !hasVoted}>
            Reset
          </Button>
        )}
        <Button variant="contained" endIcon={<HowToVoteIcon />} style={{ marginLeft: '8px' }} onClick={handleVote} disabled={!selectedCard || hasVoted}>
          {hasVoted ? 'Voted' : 'Vote'}
        </Button>
      </Box>
      <Box
        component="div"
        sx={{
          overflow: "auto",
          my: 2,
          p: 1,
          bgcolor: (theme) =>
            theme.palette.mode === "dark" ? "#101010" : "grey.100",
          color: (theme) =>
            theme.palette.mode === "dark" ? "grey.300" : "grey.800",
          border: "1px solid",
          borderColor: (theme) =>
            theme.palette.mode === "dark" ? "grey.800" : "grey.300",
          borderRadius: 2,
        }}
      >
        <div className="deckcard">
          {cards.map((card) => (
            <BasicCard
              key={card.id}
              card={card}
              setSelectedCard={!hasVoted ? setSelectedCard : showAlert}
              selectedCard={selectedCard}
            />
          ))}
        </div>
      </Box>
    </div>
  );
}
