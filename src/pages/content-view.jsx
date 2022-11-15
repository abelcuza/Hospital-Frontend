import React, {createContext, useEffect, useState} from 'react'
import CustomTable from "../components/dashboard/custom-table";
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";
import {Outlet, useLocation} from "react-router";
import Notification from "../components/notifications";
import Search from "../components/search";
import {Stack} from "@mui/material";
import SelectFilter from "../components/filters";
import FiltersForm from "../components/filters-form";


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
    const [filters, setFilters] = useState([])
    const [filterParams, setFilterParams] = useState({})
    const [inputFilters, setInputFilters] = useState([])
    const location = useLocation()

    useEffect(() => {
        api("filters").get().then(resp => {
            setFilters(resp.data['filters'])
        })
    }, [location])

    useEffect(() => {
        async function fetchData() {
            return await api().list({search: searchParam, ...filterParams})
        }

        fetchData().then((data) => setData(data.data))
    }, [searchParam, filterParams, location, notificationData])

    return (
        <dataContext.Provider value={data}>
            <Notification notificationData={notificationData} setNotificationData={setNotificationData}/>
            <Stack direction="row" sx={{marginBottom: "20px", marginTop: "20px",}} spacing={2}>
                <SelectFilter setInputFilters={setInputFilters} inputFilters={inputFilters} filters={filters}/>
                <Search setSearchParam={setSearchParam}/>
            </Stack>
            <FiltersForm setFilterParams={setFilterParams} inputFilters={inputFilters}/>
            <CustomTable fields={fields} data={data} model={model}/>
            <Link style={linkStyle()} to={`${location.pathname}/add`}><Button variant="contained"
                                                                              style={buttonStyle()}>Añadir</Button></Link>
            <Outlet context={{'data': data, 'setNotificationData': setNotificationData}}/>
        </dataContext.Provider>
    )
}

export default ContentView

