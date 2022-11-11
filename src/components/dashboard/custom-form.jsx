import React, {useEffect} from "react"
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import formFieldsDescription from "../../data/formFieldsDescription";

const input_style = {
    width: "100%"
}

const CustomForm = ({fields, setParams, values}) => {
    useEffect(() => {
        setParams(values)
    }, [])
    const handleChange = (event) => {
        const {name, value} = event.target
        setParams(data => {
            return {...data, [name]: value}
        })
    }
    return (
        <div className="custom-form">
            <Grid container spacing={2}>
                {fields.map((field) => (
                    <Grid key={field} item xs={12}>
                        {values ?
                            <TextField defaultValue={values[field]} style={input_style} size="small"
                                       onChange={handleChange}
                                       required={formFieldsDescription[field].required}
                                       id={formFieldsDescription[field].id}
                                       name={formFieldsDescription[field].id}
                                       label={formFieldsDescription[field].label}/>
                            :
                            <TextField style={input_style} size="small" onChange={handleChange}
                                       required={formFieldsDescription[field].required}
                                       id={formFieldsDescription[field].id}
                                       name={formFieldsDescription[field].id}
                                       label={formFieldsDescription[field].label}/>
                        }
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default CustomForm