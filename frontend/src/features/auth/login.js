import { useState, useEffect } from "react";
import { TextField, Button, Grid, Paper ,Typography} from "@mui/material/";
import { useNavigate, Link } from "react-router-dom";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSignedIn, setIsSignedIn] = useState(false);

  const navigate = useNavigate();


    const handleLogin = async (event) => {
      event.preventDefault();

        const response = await fetch("http://127.0.0.1:8000/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        });

        if (response.status===200) {
          setIsSignedIn(true);
          navigate("/home");
        } else {
          navigate("/");
          const error = await response.text();
          setErrorMessage("Invalid credentials");
        }
        const data = await response.json();
        localStorage.setItem("user", JSON.stringify(data.user));
     
    };
  
  

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