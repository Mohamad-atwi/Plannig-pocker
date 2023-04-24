import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function BasicCard({ card, setSelectedCard, selectedCard }) {
  const handleClick = () => {
    setSelectedCard(card);
    console.log("card selected ", card);
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
        color: selectedCard === card ? "gold" : "black",
        backgroundColor: selectedCard === card ? "green" : "white",
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
          {card.value}
        </Typography>
      </CardContent>
    </Card>
  );
}
