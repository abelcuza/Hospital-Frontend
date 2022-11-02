import React from 'react'
import './App.css';
import {useRoutes} from "react-router";
import {authRoutes} from "./routes";

function App() {
    const routes = useRoutes([
        ...authRoutes
    ])
    return (
        <div className="App">
            {routes}
        </div>
    );
}

export default App;
