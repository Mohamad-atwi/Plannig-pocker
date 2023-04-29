
import { Link, useNavigate } from "react-router-dom";
import JoinsSession from "../session/JoinSession";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import CreateIcon from '@mui/icons-material/Create';
function Home() {
  const navigate = useNavigate();

  const handleJoinSession=()=>{
   navigate("/JoinSession")  
  }
  const handleCreateSession=()=>{
    navigate("/CreateSession")  
   }
  return (
    <div className="App" >
      <h1>Welcome To The TSD-Project</h1>
      <p>Choose the Card</p>
      <Link to="/session" > go to session</Link>
      <div style={{ display: 'flex' }}>
      <Card sx={{ maxWidth: 345, marginRight: 2 }}>
        <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <AddIcon sx={{ fontSize: 60 }} onClick={handleJoinSession} style={{cursor: 'pointer'}}/>
          <Typography variant="h5" component="h2">
            Join a session
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
        <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <CreateIcon sx={{ fontSize: 60 }} onClick={handleCreateSession} style={{cursor: 'pointer'}}/>
          <Typography variant="h5" component="h2">
            Create a new Session
          </Typography>
        </CardContent>
      </Card>
    </div>
      {/* <JoinsSession/> */}
    </div>
  );
}

export default Home;
