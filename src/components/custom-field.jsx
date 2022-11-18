import React from "react"
import SelectField from "./select-field";
import ModelField from "./model-field";
import TextField from "@mui/material/TextField";
import ModelListField from "./model-list-field";


const CustomField = (props) => {
    const {id, label, required, type, setParams, fullWidth, defaultValue, step} = props

    const handleChange = (event) => {
        const {name, value} = event.target
        setParams(data => {
            return {...data, [name]: value}
        })
    }
    if (type === 'select') {
        return <SelectField {...props}/>
    }
    if (type === 'modelList'){
        return <ModelListField {...props}/>
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
                       type={type}
                       label={label}/>
            :
            <TextField fullWidth={fullWidth} size="small" onChange={handleChange}
                       required={required}
                       id={id}
                       type={type}
                       name={id}
                       label={label}/>
    )
}

export default CustomField