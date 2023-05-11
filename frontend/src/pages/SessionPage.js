import * as React from 'react';
import { useState, useEffect } from "react";
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
import * as estimationServices from "../services/estimationServices";

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
    const [hasVoted, setHasVoted] = useState(false);

    const fetchEstimations = async () => {
        const data = await estimationServices.getEstimations(1);// TO BE CHANGE when we select a session
        setEstimations(data);
    };

    useEffect(() => {
        fetchEstimations();
    }, []);


    const handleDrawerToggel = () => {
        setOpen(!open);
    };

    return (
        <Box sx={{ display: 'flex', maxWidth: '100vw' }}>
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
                <Deck
                    deckId={1}
                    selectedCard={selectedCard}
                    setSelectedCard={setSelectedCard}
                    hasVoted={hasVoted}
                    setHasVoted={setHasVoted}
                    refreshEstimations={fetchEstimations}
                />
                <StorieCard/>
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
                    <IconButton onClick={handleDrawerToggel} sx={{ display: { xs: 'block', sm: 'none', md: 'none', lg: 'none', xl: 'none' } }} >
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
                        estimations={estimations}
                        hasVoted={hasVoted}
                    />
                </Box>
            </Drawer>
        </Box>
    );
}
