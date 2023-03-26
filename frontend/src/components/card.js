import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
// import { makeStyles } from "@mui/material";
// const useStyles = makeStyles({
//   card: {
//     width: "5rem",
//     display: "flex",
//     justifyContent: "center",
//   },
// });
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
export default function BasicCard() {
  // const classes = useStyles();

  return (
    <Grid
      container
      spacing={1}
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      {numbers.map((number) => (
        <Grid item xs={1} md={1}>
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
        </Grid>
      ))}
    </Grid>
  );
}
