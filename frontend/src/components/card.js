import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function BasicCard({ number }) {

  return (
    <Card
      sx={{
        width: "6rem",
        height: "8rem",
        display: "flex",
        justifyContent: "center",
        outline: "0.2rem",
        outlineStyle: "solid",
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
