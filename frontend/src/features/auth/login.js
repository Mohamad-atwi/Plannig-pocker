import { useState, useEffect } from "react";
import { TextField, Button, Grid, Paper, Typography } from "@mui/material/";
import { useNavigate, Link } from "react-router-dom";
import * as userServices from '../../services/userServices';

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => { console.log(loading) }, [loading])

  const handleLogin = async (event) => {
    event.preventDefault()
    setLoading(true);
    let res;
    if (username && password) {
      res = await userServices.login(username, password).then((res) => {
        setLoading(false);
        if (res) {
          setIsSignedIn(true);
          navigate("/");
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
          width: "20rem",
          margin: 0,
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        {isSignedIn ? (
          <Typography variant="h6">Thanks for signing up!</Typography>
        ) : (
          <form onSubmit={handleLogin}>
            <Grid container spacing={2} direction="column">
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
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
                  Sign In
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="body1" color="textSecondary">
                  Don't have an account?{" "}
                  <Link
                    to="/signup"
                    style={{
                      textDecoration: "none",
                      color: "#1565c0",
                    }}
                  >
                    Sign up
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

export default LoginForm;