import React from "react"
import SelectField from "./select-field";
import ModelField from "./model-field";
import TextField from "@mui/material/TextField";


const CustomField = (props) => {
    const {id, label, required, type, setParams, fullWidth, defaultValue} = props

    const handleChange = (event) => {
        const {name, value} = event.target
        setParams(data => {
            return {...data, [name]: value}
        })
    }
    if (type === 'select') {
        return <SelectField {...props}/>
    }
    if (type === 'model') {
        return <ModelField {...props}/>
    }
    return (
        defaultValue ?
            <TextField defaultValue={defaultValue} fullWidth={fullWidth} size="small" onChange={handleChange}
                       required={required}
                       id={id}
                       name={id}
                       label={label}/>
            :
            <TextField fullWidth={fullWidth} size="small" onChange={handleChange}
                       required={required}
                       id={id}
                       name={id}
                       label={label}/>
    )
}

export default CustomField