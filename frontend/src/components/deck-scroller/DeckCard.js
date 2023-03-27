import * as React from "react";
import Box from "@mui/material/Box";
import "./DeckCard.css";
import BasicCard from "../card";
export default function Overflow() {
  return (
    <div className="Deck">
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
        <div class="deckcard">
          <BasicCard />
        </div>
      </Box>
    </div>
  );
}
