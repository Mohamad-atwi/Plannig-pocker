import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import LogoutIcon from '@mui/icons-material/Logout';
import { logout } from '../services/userServices';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

const drawerWidth = 240;

export default function LayoutSideBar() {
    const [open, setOpen] = useState(false);
    const [openLogoutDialog, setOpenLogoutDialog] = useState(false);
    const [openExitDialog, setOpenExitDialog] = useState(false);

    const [SessionPage, setSessionPage] = useState(false);
    const projectPath = useLocation();
    const navigate = useNavigate();

    const handleLogout = () => {
        setOpenLogoutDialog(true);
    }

    const handleConfirmLogout = () => {
        logout();
        navigate('/login');
        setOpenLogoutDialog(false);
    };

    const handleCancelLogout = () => {
        setOpenLogoutDialog(false);
    };
    const handleExit = () => {
        setOpenExitDialog(true);
    }
    const handleConfirmExit = () => {
        setOpenExitDialog(false);
        navigate('/');
    };
    const handleCancelExit = () => {
        setOpenExitDialog(false);
    };

    useEffect(() => {
        setSessionPage(projectPath.pathname.includes("session"));
    }, [projectPath]);

    return (
        <Box sx={{ display: 'flex' }}>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <Toolbar />
                <h1 style={{ marginTop: "-2rem", marginLeft: "0.3rem" }}>TSD-Project</h1>
                <Divider />
                <List>
                    <ListItem disablePadding>
                        <ListItemButton component={Link} to=''>
                            <ListItemIcon>
                                <HomeIcon />
                            </ListItemIcon>
                            <ListItemText primary='Home' />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component={Link} to='/history'>
                            <ListItemIcon>
                                <HistoryEduIcon />
                            </ListItemIcon>
                            <ListItemText primary='History' />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton onClick={handleLogout}>
                            <ListItemIcon>
                                <LogoutIcon />
                            </ListItemIcon>
                            <ListItemText primary='Logout' />
                        </ListItemButton>
                    </ListItem>
                </List>
                {SessionPage &&
                    <>
                        <Divider />
                        <List>
                            <ListItem disablePadding>
                                <ListItemButton onClick={handleExit} component={Link} >
                                    <ListItemIcon>
                                        <ExitToAppIcon />
                                    </ListItemIcon>
                                    <ListItemText primary='Exit' />
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </>
                }
            </Drawer>

            <Dialog open={openLogoutDialog} onClose={handleCancelLogout}>
                <DialogTitle>Logout Confirmation</DialogTitle>
                <DialogContent>
                    <p>Are you sure you want to logout?</p>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCancelLogout} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleConfirmLogout} color="primary">
                        Logout
                    </Button>
                </DialogActions>
            </Dialog>
            
            <Dialog open={openExitDialog} onClose={handleCancelExit}>
                <DialogTitle>Exit Confirmation</DialogTitle>
                <DialogContent>
                    <p>Are you sure you want to exit?</p>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCancelExit} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleConfirmExit} color="primary">
                        Exit
                    </Button>
                </DialogActions>
            </Dialog>

            {<Outlet />}
        </Box>
    );
}
