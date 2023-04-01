import { useState } from "react";
import { TextField, Button, Grid, Paper } from "@mui/material/";
import { useNavigate } from "react-router-dom";

function SignupForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/home", true);
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
          width: "15rem",

          margin: 0,
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2} direction="column">
            <Grid item xs={12} sm={6}>
              <TextField
                label="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                // fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                // fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                //  fullWidth
              >
                Signup
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </div>
  );
}

export default SignupForm;
