import {useEffect, useState} from 'react';
import {Link, Outlet, useLocation } from "react-router-dom";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const drawerWidth = 240;

export default function LayoutSideBar() {
    const [SessionPage,setSessionPage] = useState(false);
    const projectPath = useLocation();

    useEffect(() => {
            setSessionPage(projectPath.pathname.includes("session"));
    })

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
                <Divider />
                <List>
                    {[{ text: 'Home', link: '' }, { text: 'History', link: '/history' }, { text: 'Logout', link: '/logout' }].map((text, index) => (
                        <ListItem key={text.text} disablePadding>
                            <ListItemButton component={Link} to={text.link}>
                                <ListItemIcon>
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text.text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <Divider />
                {SessionPage ? <List>
                    {[{ text: 'Exit', link: '' }, ].map((text, index) => (
                        <ListItem key={text.text} disablePadding>
                            <ListItemButton component={Link} to={text.link}>
                                <ListItemIcon>
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text.text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                :
                <></>}
            </Drawer>
            {<Outlet />}
        </Box>
    );
}
