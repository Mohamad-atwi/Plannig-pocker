import { useState } from "react";
import {
  TextField,
  Button,
  Grid,
  Paper,
  Typography,
  FormControlLabel,
  Checkbox,
} from "@mui/material/";
import { useNavigate, Link } from "react-router-dom";

import * as userServices from "../../services/userServices";

function SignupForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    let res;

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    } else if (username === "") {
      alert("username cannot be empty");
    } else if (password === "" || confirmPassword === "") {
      alert("Passwords cannot be empty");
    } else {
      res = await userServices.createUser(username, password);
    }
    if (res) {
      setIsSignedUp(true);
      navigate("/login");
    } else {
      setError("Invalid credentials");
    }
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
        {isSignedUp ? (
          <Typography variant="h6" style={{ color: "green" }}>
            Thanks for signing up!
          </Typography>
        ) : (
          <form onSubmit={handleSubmit}>
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
                <TextField
                  label="Confirm Password"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox onChange={() => setIsChecked((prev) => !prev)} />
                  }
                  label={
                    <Typography>
                      I accept all the terms of the{" "}
                      <Link to={"/Terms"} target="_blank">
                        Disclaimer.
                      </Link>
                    </Typography>
                  }
                  required
                />
              </Grid>
              {error && (
                <Grid item xs={12}>
                  <Typography variant="body1" color="error">
                    {error}
                  </Typography>
                </Grid>
              )}
              <Grid item xs={12}>
                <Button
                  type="submit"
                  disabled={!isChecked}
                  variant="contained"
                  color="primary"
                >
                  Signup
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1" color="textSecondary">
                  Already have an account?{" "}
                  <Link
                    to="/"
                    style={{
                      textDecoration: "none",
                      color: "#1565c0",
                    }}
                  >
                    Login
                  </Link>
                </Typography>
              </Grid>
            </Grid>
          </form>
        )}
      </Paper>
    </div>
  );
}

export default SignupForm;
