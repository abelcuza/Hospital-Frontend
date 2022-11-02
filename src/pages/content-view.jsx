import React, {createContext, useEffect, useState} from 'react'
import CustomTable from "../components/dashboard/custom-table";
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";
import {Outlet} from "react-router";


const buttonStyle = (form = false) => ({
    display: 'block',
    marginTop: form ? 22 : 35,
})

const linkStyle = () => ({
    color: 'rgba(0, 0, 0, 0.87)',
    textDecoration: 'NONE'
})
const dataContext = createContext([])
const ContentView = ({model, api, fields}) => {
    const [data, setData] = useState([])

    async function fetchData() {
        return await api.list()
    }

    useEffect(() => {
        fetchData().then((data) => setData(data.data))
    }, [])

    return (
        <dataContext.Provider value={data}>
            <div className="table-view">
                <CustomTable fields={fields} data={data} model={model}/>
                <Link style={linkStyle()} to="/medico/add"><Button variant="contained"
                                                                   style={buttonStyle()}>Añadir</Button></Link>
                <Outlet context={{'data': data}}/>
            </div>
        </dataContext.Provider>
    )
}

export default ContentView