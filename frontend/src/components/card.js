import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function BasicCard({ number, setSelectedCard, selectedCard }) {
  const handleClick = () => {
    setSelectedCard(number);
    console.log("card selected ", number);
  };
  return (
    <Card
      onClick={handleClick}
      sx={{
        width: "6rem",
        height: "8rem",
        display: "flex",
        justifyContent: "center",
        outline: "0.2rem",
        outlineStyle: "solid",
        color: selectedCard === number ? "gold" : "black",
        backgroundColor: selectedCard === number ? "green" : "white",
      }}
      // className={classes.card}
    >
      <CardContent>
        <Typography
          variant="h2"
          component="div"
          style={{
            justifyContent: "center",
            textAlign: "center",
            marginTop: "1rem",
          }}
        >
          {number}
        </Typography>
      </CardContent>
    </Card>
  );
}
