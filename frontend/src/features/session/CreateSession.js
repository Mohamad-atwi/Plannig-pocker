import { useState, useEffect } from "react";
import { TextField, Button, Grid, Paper, Typography } from "@mui/material/";
import { useNavigate, Link } from "react-router-dom";
import * as sessionServices from "../../services/sessionServices"

function CreateSession() {
  const [sessiontitle, setSessionTitle] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isCreated, setIsCreatedIn] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault()
    let res;

   if (sessiontitle === "") {
      alert("title cannot be empty");
    }
    else if (password === "" ) {
      alert("Passwords cannot be empty");
    }
    else {
      res = await sessionServices.createSession(sessiontitle, password)
    }
    if (res) {
      setIsCreatedIn(true);
      navigate(`/session/${res.data.session.id}`)
    }
    else {
      setError("Invalid credentials");
    }
  }


  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Paper
        elevation={7}
        style={{
          padding: 20,
          width: "40rem",
          margin: 0,
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        {isCreated ? (
          <Typography variant="h6">Thanks for Create this session!</Typography>
        ) : (
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2} direction="column">
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Title"
                  value={sessiontitle}
                  onChange={(e) => setSessionTitle(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  Create
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="body1" color="textSecondary">
                Go Back To {" "}
                  <Link
                    to="/home"
                    style={{
                      textDecoration: "none",
                      color: "#1565c0",
                    }}
                  >
                    Home
                  </Link>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                {errorMessage && (
                  <Typography variant="body1" color="error">
                    {errorMessage}
                  </Typography>
                )}
              </Grid>
            </Grid>
          </form>
        )}
      </Paper>
    </div>
  );
}

export default CreateSession;