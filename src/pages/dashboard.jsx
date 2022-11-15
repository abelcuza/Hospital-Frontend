import React, {useEffect, useState} from 'react';
import {useTheme} from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import TopBar from "../components/dashboard/top-bar";
import SideBar from "../components/dashboard/side-bar";
import DrawerHeader from "../components/dashboard";
import {Navigate, Outlet} from "react-router";
import Copyright from "../components/copyright";
import {useSelector} from "react-redux";


const Dashboard = () => {
    const auth = useSelector((state) => state.user.isAuthenticated)
    const [user, setUser] = useState("")
    const theme = useTheme();
    const [open, setOpen] = useState(true);

    useEffect(() => {
        setUser(localStorage.getItem("username"))
    }, [])
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    if (!auth) {
        return <Navigate to="/login"/>
    }

    return (
        <div className="dashboard">
            <Box sx={{display: 'flex'}}>
                <CssBaseline/>
                <TopBar open={open} user={user} action={handleDrawerOpen}/>
                <SideBar open={open} action={handleDrawerClose} theme={theme}/>
                <Box component="main" sx={{flexGrow: 1, p: 3, paddingTop: 3, width: "80%"}}>
                    <DrawerHeader/>
                    <Outlet/>
                </Box>
            </Box>
            <Copyright sx={{mt: 8, mb: 4}}/>
        </div>
    );
}

export default Dashboard
