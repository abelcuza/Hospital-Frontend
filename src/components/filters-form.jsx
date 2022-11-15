import React from "react"
import {Stack, TextField} from "@mui/material";
import formFieldsDescription from "../data/formFieldsDescription";
import CustomField from "./custom-field";

const FiltersForm = ({inputFilters, setFilterParams}) => {
    const handleChange = (event) => {
        const {name, value} = event.target
        setFilterParams(data => {
            return {...data, [name]: value}
        })
    }
    return (
        <div className="filters-form">
            <Stack direction="row" sx={{marginBottom: "50px", marginTop: "20px"}} spacing={2}>
                {inputFilters.map(filter => (
                    <CustomField {...formFieldsDescription[filter]} setParams={setFilterParams} fullWidth={false} width={"200px"}/>
                ))}
            </Stack>
        </div>
    )
}

export default FiltersForm