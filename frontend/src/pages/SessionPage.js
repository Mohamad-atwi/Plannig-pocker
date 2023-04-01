import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import EstimationTable from '../components/estimation-table/estimation-table';
import Overflow from '../components/deck-scroller/DeckCard';

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
    const [open, setOpen] = React.useState(true);

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
                <Overflow />
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
                </DrawerHeader>
                <Divider />
                <Typography variant="h6" noWrap sx={{ flexGrow: 1 }} component="div">
                    <EstimationTable />
                </Typography>
                <Divider />
                <Typography variant="h6" noWrap sx={{ flexGrow: 1 }} component="div">
                    another infos
                </Typography>
            </Drawer>
        </Box>
    );
}
