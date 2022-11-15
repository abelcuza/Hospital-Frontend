import React, {useEffect, useState} from "react"
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";

const SelectField = ({id, label, values, required, setParams, fullWidth, width, defaultValue}) => {
    const [selectValue, setSelectValue] = useState("")

    useEffect(() => {
        if (defaultValue) {
            setSelectValue(defaultValue)
        }
    }, [])

    const handleChange = (event) => {
        const {value} = event.target
        setSelectValue(value)
        setParams(data => {
            return {...data, [id]: value}
        })
    }
    return (
        defaultValue ?
            <FormControl required={required} fullWidth={fullWidth} sx={{width: width}} size="small">
                <InputLabel id={`${id}-label`}>{label}</InputLabel>
                <Select
                    id={`${id}_select`}
                    labelId={`${id}_label`}
                    value={selectValue}
                    label={label}
                    onChange={handleChange}
                >
                    {values.map(({id, name}) => (
                        <MenuItem key={id} value={id}>{name}</MenuItem>
                    ))}
                </Select>
            </FormControl>
            :
            <FormControl required={required} fullWidth={fullWidth} sx={{width: width}} size="small">
                <InputLabel id={`${id}-label`}>{label}</InputLabel>
                <Select
                    id={`${id}-select`}
                    labelId={`${id}-label`}
                    value={selectValue}
                    label={label}
                    onChange={handleChange}
                >
                    {values.map(({id, name}) => (
                        <MenuItem key={id} value={id}>{name}</MenuItem>
                    ))}
                </Select>
            </FormControl>
    )
}

export default SelectField