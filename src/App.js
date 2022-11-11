import React from 'react'
import './App.css';
import {useRoutes} from "react-router";
import {authRoutes, publicRoutes,} from "./routes";

function App() {
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
