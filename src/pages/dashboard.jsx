import React from 'react';
import {useTheme} from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import TopBar from "../components/dashboard/top-bar";
import SideBar from "../components/dashboard/side-bar";
import DrawerHeader from "../components/dashboard";
import {Outlet} from "react-router";


const Dashboard = () => {
    const theme = useTheme();
    const [open, setOpen] = React.useState(true);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline/>
            <TopBar open={open} action={handleDrawerOpen}/>
            <SideBar open={open} action={handleDrawerClose} theme={theme}/>
            <Box component="main" sx={{flexGrow: 1, p: 3, paddingTop: 3}}>
                <DrawerHeader/>
                <Outlet/>
            </Box>
        </Box>
    );
}

export default Dashboard
