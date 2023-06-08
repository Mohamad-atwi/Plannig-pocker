import { useState, useEffect } from "react";
import { TextField, Button, Grid, Paper, Typography } from "@mui/material/";
import { useNavigate, Link } from "react-router-dom";
import * as sessionServices from '../../services/sessionServices';

function JoinsSession() {
  const [sessionid, setSessionId] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isJoinedIn, setIsJoinedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleJoin = async (event) => {
    event.preventDefault()
    let res;
    if (sessionid && password) {
      setLoading(true)
      res = await sessionServices.Join(sessionid, password).then(res=>{
        setLoading(false)
        if (res.status === 200) {
          setIsJoinedIn(true);
          navigate(`/session/${res.data.session.id}`);
        }
        else {
          setErrorMessage("Invalid credentials");
        }
      })
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
        {isJoinedIn ? (
          <Typography variant="h6">Thanks for Joined this session!</Typography>
        ) : (
          <form onSubmit={handleJoin}>
            <Grid container spacing={2} direction="column">
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Session Id"
                  value={sessionid}
                  onChange={(e) => setSessionId(e.target.value)}
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
                  disabled={loading}
                >
                  Join
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="body1" color="textSecondary">
                  Don't have an session id?{" "}
                  <Link
                    to="/CreateSession"
                    style={{
                      textDecoration: "none",
                      color: "#1565c0",
                    }}
                  >
                    Create your session
                  </Link>
                </Typography>
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

export default JoinsSession;