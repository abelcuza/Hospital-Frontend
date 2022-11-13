import React from "react"
import {Stack, TextField} from "@mui/material";
import formFieldsDescription from "../data/formFieldsDescription";

const FiltersForm = ({inputFilters, setFilterParams}) => {
    const handleChange = (event) => {
        const {name, value} = event.target
        setFilterParams(data => {
            return {...data, [name]: value}
        })
    }
    return (
        <div className="filters-form">
            <Stack direction="row" sx={{marginBottom: "50px", marginTop: "20px", marginLeft: "20px"}} spacing={2}>
            {inputFilters.map(filter => (
                <TextField size="small" onChange={handleChange}
                           required={formFieldsDescription[filter].required}
                           id={formFieldsDescription[filter].id}
                           name={formFieldsDescription[filter].id}
                           label={formFieldsDescription[filter].label}/>
            ))}
            </Stack>
        </div>
    )
}

export default FiltersForm