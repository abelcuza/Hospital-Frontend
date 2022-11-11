import React from "react";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import {styled} from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import LocalHospitalSharpIcon from '@mui/icons-material/LocalHospitalSharp';
import {Menu, MenuItem, Tooltip} from "@mui/material";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import {Link} from "react-router-dom";
import settings from "../../data/tob-bar-options";

const drawerWidth = 240;

const logoStyle = {
    display: "flex",
    alignItems:"center"
}

const linkStyle = () => ({
    color: 'rgba(0, 0, 0, 0.87)',
    textDecoration: 'NONE',
    display: "flex",
    alignItems:"center"
})

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


const TopBar = ({open, action, user}) => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    return (
        <div className='top-bar'>
            <AppBar position="fixed" open={open}>
                <Toolbar sx={{display: {xs: 'flex', md: 'flex'}, justifyContent: {xs: 'center', md: 'space-between'}}}>
                    <div className="logo" style={logoStyle}>
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
                        <LocalHospitalSharpIcon sx={{display: {xs: 'flex', md: 'flex'}, mr: 1}}/>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: {xs: 'flex', md: 'flex'},
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            VPOLICLÍNICO
                        </Typography>
                    </div>
                    <Box sx={{flexGrow: 0}}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                                <Avatar alt={user.toUpperCase()} src="/static/images/avatar/2.jpg"/>
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{mt: '45px'}}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map(({name, icon, path}) => (
                                <MenuItem key={name}>
                                    <Link style={linkStyle()} to={path}>
                                        {icon}
                                    <Typography textAlign="center">{name}</Typography>
                                    </Link>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default TopBar;
