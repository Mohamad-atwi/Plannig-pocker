import { useState } from "react";
import { TextField, Button, Grid, Paper ,Typography} from "@mui/material/";
import { useNavigate , Link } from "react-router-dom";

function SignupForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [comfirmPassword, setComfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isSignedUp, setIsSignedUp] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    if (password !== comfirmPassword) {
      setError("Passwords do not match");
      return;
    }
  
    const response = await fetch("http://127.0.0.1:8000/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, password })
    });
  
    if (response.ok) {
      const data = await response.json();
      localStorage.setItem("user", JSON.stringify(data.user));
      setIsSignedUp(true);
      navigate("/");
    } else {
      const error = await response.text();
      setError(error);
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
          <Typography variant="h6" style={{color:"green"}}>Thanks for signing up!</Typography>
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
                  value={comfirmPassword}
                  onChange={(e) => setComfirmPassword(e.target.value)}
                />
              </Grid>
              {error &&
          <Grid item xs={12}>
          <Typography variant="body1" color="error">{error}</Typography>
        </Grid>
        }
        <Grid item xs={12}>
          <Button
            type="submit"
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

