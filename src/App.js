import React, {createContext, useContext, useMemo, useState} from 'react'
import './App.css';
import {useRoutes} from "react-router";
import {authRoutes, publicRoutes,} from "./routes";
import {useTheme} from "@mui/material/styles";
import {createTheme} from "@mui/material";
import {ThemeProvider} from "@emotion/react";

const ColorModeContext = createContext({
    toggleColorMode: () => {
    }
})

function MyApp() {
    const routes = useRoutes([
        ...authRoutes,
        ...publicRoutes
    ])
    return (
        <div className="App">
            {routes}
        </div>

    );
}

export default App;


function App() {
    const [mode, setMode] = useState('light');
    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
        [],
    );

    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                },
            }),
        [mode],
    );

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <MyApp/>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}
