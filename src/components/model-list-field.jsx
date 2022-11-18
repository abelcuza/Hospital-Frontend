import React, {useEffect, useState} from "react"
import models from "../models";
import api from "../api";
import {Autocomplete, TextField} from "@mui/material";

const ModelListField = ({id, model, label, required, setParams, fullWidth, width, defaultValue}) => {
    const [data, setData] = useState([])
    const [value, setValue] = useState([])
    const {nameField, modelName} = models[model]

    useEffect(() => {
        api[model]().list().then(resp => {
            setData(resp.data)
            setValue(resp.data.filter((obj) => (
                defaultValue.indexOf(obj[nameField]) !== -1
            )))
        })
    }, [])

    const handleChange = (e, newValue) => {
        setValue(newValue)
        newValue ?
            setParams(data => {
                const state = []
                newValue.map(({id}) => state.push(id))
                return {...data, [id]: state}
            })
            :
            setParams(data => {
                return {...data, [id]: []}
            })
    }
    return (
        fullWidth ?
            <Autocomplete
                multiple
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
                    <TextField fullWidth {...params} label={label}/>)}
            />
            :
            <Autocomplete
                multiple
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
                    <TextField {...params} label={label}/>)}
            />
    )
}

export default ModelListField