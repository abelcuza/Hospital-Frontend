import React from "react"
import {AccountCircle, Logout} from "@mui/icons-material";


const settings = [
    {
        name: 'Mi Perfil',
        icon: <AccountCircle/>,
        path: ''
    },
    {
        name: 'Salir',
        icon: <Logout/>,
        path: '/logout'
    }
];

export default settings