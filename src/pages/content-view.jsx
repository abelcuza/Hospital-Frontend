import React, {createContext, useEffect, useState} from 'react'
import CustomTable from "../components/dashboard/custom-table";
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";
import {Outlet} from "react-router";
import Notification from "../components/notifications";
import Search from "../components/search";


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
    const [notificationData, setNotificationData] = useState({open: false})
    const [searchParam, setSearchParam] = useState("")

    useEffect(() => {
        async function fetchData() {
            return await api().list({search: searchParam})
        }
        fetchData().then((data) => setData(data.data))
    }, [searchParam])

    return (
        <dataContext.Provider value={data}>
            <Notification notificationData={notificationData} setNotificationData={setNotificationData}/>
            <div className="table-view">
                <Search setSearchParam={setSearchParam}/>
                <CustomTable fields={fields} data={data} model={model}/>
                <Link style={linkStyle()} to="/medico/add"><Button variant="contained"
                                                                   style={buttonStyle()}>Añadir</Button></Link>
                <Outlet context={{'data': data, 'setNotificationData': setNotificationData}}/>
            </div>
        </dataContext.Provider>
    )
}

export default ContentView