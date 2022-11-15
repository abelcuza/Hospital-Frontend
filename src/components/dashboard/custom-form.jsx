import React, {useEffect} from "react"
import Grid from '@mui/material/Grid';
import formFieldsDescription from "../../data/formFieldsDescription";
import CustomField from "../custom-field";

const CustomForm = ({fields, setParams, values}) => {
    useEffect(() => {
        setParams(values)
    }, [])

    return (
        <div className="custom-form">
            <Grid container spacing={2}>
                {fields.map((field) => (
                    <Grid key={field} item xs={12}>
                        {values ?
                            <CustomField defaultValue={values[field]} fullWidth={true}
                                         setParams={setParams} {...formFieldsDescription[field]}/>
                            :
                            <CustomField fullWidth={true} setParams={setParams} {...formFieldsDescription[field]}/>
                        }
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default CustomForm