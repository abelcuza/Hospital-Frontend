import React, {useEffect, useState} from "react"
import {Autocomplete, TextField} from "@mui/material";
import api from "../api";
import models from "../models"


const ModelField = ({id, label, required, setParams, fullWidth, width, defaultValue}) => {
    const [data, setData] = useState([])
    const [value, setValue] = useState(null)
    const {nameField, modelName} = models[id]

    useEffect(() => {
        api[id]().list().then(resp => {
            console.log(resp)
            setData(resp.data)
        })
    }, [])

    const handleChange = (e, newValue) => {
        setValue(newValue)
        newValue ?
            setParams(data => {
                return {...data, [id]: newValue.id}
            })
            :
            setParams(data => {
                return {...data, [id]: null}
            })
    }

    return (
        fullWidth ?
            <Autocomplete
                size="small"
                value={value}
                disablePortal
                id="combo-box-demo"
                onChange={handleChange}
                selectOnFocus
                clearOnBlur
                handleHomeEndKeys
                options={data}
                getOptionLabel={option => option[nameField]}
                sx={{width: width}}
                freeSolo
                renderOption={((props, option) => <li {...props}>{option[nameField]}</li>)}
                renderInput={(params) => (
                    <TextField fullWidth {...params} label={modelName}/>)}
            />
            :
            <Autocomplete
                size="small"
                value={value}
                disablePortal
                id="combo-box-demo"
                onChange={handleChange}
                selectOnFocus
                clearOnBlur
                handleHomeEndKeys
                options={data}
                getOptionLabel={option => option[nameField]}
                sx={{width: width}}
                freeSolo
                renderOption={((props, option) => <li {...props}>{option[nameField]}</li>)}
                renderInput={(params) => (
                    <TextField {...params} label={modelName}/>)}
            />
    )
}

export default ModelField






