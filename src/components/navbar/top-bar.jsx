import React from "react";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import {styled} from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({theme, open}) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const TopBar = ({open, action}) => (
    <div className='top-bar'>
        <AppBar position="fixed" open={open}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={action}
                    edge="start"
                    sx={{
                        marginRight: 5,
                        ...(open && {display: 'none'}),
                    }}
                >
                    <MenuIcon/>
                </IconButton>
                <Typography variant="h6" noWrap component="div">
                    El consultorio sabroso
                </Typography>
            </Toolbar>
        </AppBar>
    </div>
)

export default TopBar;
