import { Button } from "@mui/material";
import Overflow from "../../components/deck-scroller/DeckCard";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="App">
      <h1>Welcome To The TSD-Project</h1>
      <p>Choose the Card</p>
      <Link to="/session" > go to session</Link>
    </div>
  );
}

export default Home;
