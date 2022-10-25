import React from 'react';
import {useTheme} from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import TopBar from "./top-bar";
import SideBar from "./side-bar";
import DrawerHeader from "./index";
import {Route, Routes} from "react-router"
import {authRoutes} from "../../routes";

const Navbar = () => {
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
                <Routes>
                    {authRoutes.map(({path, page}) => (
                        <Route path={path} element={page} key={path}/>
                    ))}
                </Routes>
            </Box>
        </Box>
    );
}

export default Navbar
