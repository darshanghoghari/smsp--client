import React from 'react';
import { Drawer, List, ListItem, ListItemText, useMediaQuery, useTheme, Typography, Stack } from '@mui/material';
import { NavLink } from 'react-router-dom';

const LeftSideDrawer = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Drawer
            variant="permanent"
            anchor="left"
            sx={{
                width: '20%', // Set width to 100% on small screens
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: '20%', // Set paper width to 100% on small screens
                },
            }}
        >
            <Stack justifyContent="center" alignItems="center" p={2}>
                <Typography variant="h6" gutterBottom>
                    Admin Section
                </Typography>
            </Stack>
            <List>
                <hr className='my-0' />
                <ListItem button component={NavLink} to="/admin/dashboard">
                    <ListItemText primary="Home" />
                </ListItem>
                <hr className='my-0' />
                <ListItem button component={NavLink} to="/admin/house">
                    <ListItemText primary="House Details" />
                </ListItem>
                <hr className='my-0' />
                <ListItem button component={NavLink} to="/admin/complaint">
                    <ListItemText primary="Complaint Request" />
                </ListItem>
                <hr className='my-0' />
                <ListItem button component={NavLink} to="/admin/club-booking">
                    <ListItemText primary="Club Booking Request" />
                </ListItem>
                <hr className='my-0' />
                <ListItem button component={NavLink} to="/admin/circular">
                    <ListItemText primary="Circular Request" />
                </ListItem>
                <hr className='my-0' />
                <ListItem button component={NavLink} to="/admin/notice">
                    <ListItemText primary="Notice Request" />
                </ListItem>
                <hr className='my-0' />
                <ListItem button component={NavLink} to="/admin/meeting">
                    <ListItemText primary="Meeting" />
                </ListItem>
                <hr className='my-0' />
            </List>
        </Drawer>
    );
};

export default LeftSideDrawer;