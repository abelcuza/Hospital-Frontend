import React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";

const NavItem = ({text, icon, open}) => (
    <ListItem key={text} disablePadding sx={{display: 'block'}}>
        <ListItemButton
            sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
            }}
        >
            <ListItemIcon
                sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                }}
            >
                {icon}
            </ListItemIcon>
            <ListItemText primary={text} sx={{opacity: open ? 1 : 0}}/>
        </ListItemButton>
    </ListItem>
)
export default NavItem