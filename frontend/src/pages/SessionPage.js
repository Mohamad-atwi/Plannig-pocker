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

import Deck from '../components/deck-scroller/DeckCard';
import EstimationTable from '../components/estimation-table/estimation-table';
import StorieCard from '../components/storie';
import { pusher } from '../services/pusher'
import * as storiesServices from "../services/storyServices";
import * as estimationServices from "../services/estimationServices";
import * as sessionServices from "../services/sessionServices";
const drawerWidth = { xs: '80vw', sm: '35vw', md: '25vw' };

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
}));

export default function SessionPage() {
    const [open, setOpen] = useState(true);
    const [estimations, setEstimations] = useState([]);
    const [selectedCard, setSelectedCard] = useState(null);
    // const [hasVoted, setHasVoted] = useState(false);
    const { sessionId } = useParams('sessionId');
    const [deckId, setDeckId] = useState(null);
    const [session, setSession] = useState();
    const [stories, setStories] = useState([]);
    const [storyId, setStoryId] = useState(null);
    const [votedStories, setVotedStories] = useState([]);

    const fetchEstimations = async () => {
        const data = await estimationServices.getEstimations(sessionId);
        setEstimations(data);
    };

    const fetchStories = async () => {
        const data = await storiesServices.getStories(sessionId);
        setStories(data);

    };

    const fetchSession = async () => {
        const data = await sessionServices.getSession(sessionId);
        setSession(data.session);
        setDeckId(data.session.deck_id);
    };

    useEffect(() => {
        fetchSession().then(() => {
            fetchEstimations();
        });
    }, []);

    useEffect(() => {
        fetchStories().then(() => {
            stories[0] === undefined ? setStoryId(null) : setStoryId(stories[0].id) ;
        });
    },[session])


    useEffect(() => {
        const channel1 = pusher.subscribe(`session-${sessionId}`);

        channel1.bind('voting', function () {
            fetchEstimations();
        });


        // Clean up the Pusher subscription when the component unmounts
        return () => {
            channel1.unbind('voting');
            pusher.unsubscribe(`session-${sessionId}`);
        };
    }, []);

    useEffect(()=>{
        // setHasVoted(votedStories.includes(storyId));
        setSelectedCard(null);
        setOpen(votedStories.includes(storyId))
    },[votedStories,storyId])

    const handleDrawerToggel = () => {
        setOpen(!open);
    };

    return (
        <Box >
            <AppBar open={open}>
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1 }} component="div">
                        Session name
                    </Typography>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="end"
                        onClick={handleDrawerToggel}
                        sx={{ ...(open && { display: { xs: 'none', sm: 'none', md: 'none', lg: 'none', xl: 'none' } }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    padding: 3,
                    maxWidth: { xs: '80vw', sm: '60vw', md: '70vw' }
                }}
            >
                <DrawerHeader />
                {deckId ? <Deck
                    deckId={deckId}
                    selectedCard={selectedCard}
                    setSelectedCard={setSelectedCard}
                    refreshEstimations={fetchEstimations}
                    storyId={storyId}
                    votedStories={votedStories}
                    setVotedStories={setVotedStories}
                    sessionId={sessionId}
                />
                    :
                    <></>}
                {stories ? (stories.length > 0 ?
                    stories.map(storie => <StorieCard key={storie.id} setStoryId={setStoryId} story={storie} />)
                    :
                    <></>) : <></>
                }
            </Box>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                    },
                }}
                variant="persistent"
                anchor="right"
                open={open}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerToggel} sx={{ display: 'block' }} >
                        <ChevronRightIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap sx={{ flexGrow: 1 }} component="div">
                        Votes
                    </Typography>
                    <Button variant="contained" endIcon={<RefreshIcon />} style={{ marginLeft: '8px' }} onClick={fetchEstimations}>
                        Refresh
                    </Button>
                </DrawerHeader>
                <Divider />
                <Box sx={{ flexGrow: 1 }} component="div">
                    <EstimationTable
                        estimations={estimations.filter((estimation)=>estimation.story_id === storyId)}
                        hasVoted={votedStories.includes(storyId)}
                    />
                </Box>
            </Drawer>
        </Box>
    );
}
