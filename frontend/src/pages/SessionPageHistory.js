import * as React from 'react';
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Button } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import RefreshIcon from '@mui/icons-material/Refresh';
import Paper from '@mui/material/Paper';
import Deck from '../components/deck-scroller/DeckCard';
import EstimationTable from '../components/estimation-table/estimation-table';
import StorieCard from '../components/storie';
import { pusher } from '../services/pusher'
import * as storiesServices from "../services/storyServices";
import * as estimationServices from "../services/estimationServices";
import * as sessionServices from "../services/sessionServices";
import StoriesList from '../components/storiesList';
import StoryForm from '../components/storyForm';
const drawerWidth = { xs: '80vw', sm: '35vw', md: '25vw' };

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
}));

export default function SessionPageHistory() {
    const open = true;
    const [estimations, setEstimations] = useState([]);
    const { sessionId } = useParams('sessionId');
    const [session, setSession] = useState();
    const [stories, setStories] = useState([]);
    const [storyId, setStoryId] = useState(null);

    const [story, setStory] = useState(stories[0]);

    const fetchEstimations = async () => {
        const data = await estimationServices.getEstimations(sessionId);
        setEstimations(data);
    };

    const fetchStories = async () => {
        const data = await storiesServices.getStories(sessionId);
        setStories(data);
        setStory(data[0]);
        setStoryId(data[0].id);

    };

    const fetchSession = async () => {
        const data = await sessionServices.getSession(sessionId);
        setSession(data.session);
    };

    useEffect(() => {
        fetchSession().then(() => {
            fetchEstimations();
        });
    }, []);

    useEffect(() => {
        fetchStories().then(() => {
            stories[0] === undefined ? setStoryId(null) : setStoryId(stories[0].id);
        });
    }, [session])

    return (
        <Box sx={{ width: '100vw' }}>
            <AppBar open={open}>
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1 }} component="div">
                        Session name
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    padding: 3,
                }}
            >
                <DrawerHeader />
                {stories ? (stories.length > 0 ?
                    <StoriesList setStoryId={setStoryId} stories={stories} story={story} setStory={setStory} />
                    :
                    <></>) : <></>
                }
            </Box>
            <Box sx={{ flexGrow: 1, marginX: '20vw' }} component="div">
                <EstimationTable
                    estimations={estimations.filter((estimation) => estimation.story_id === storyId)}
                    hasVoted={true}
                />
            </Box>
        </Box>
    );
}
