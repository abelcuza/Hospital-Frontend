import React, {useEffect, useState} from "react"
import CustomForm from "../components/dashboard/custom-form";
import Typography from "@mui/material/Typography";
import {Container, Stack} from "@mui/material";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import {Link} from "react-router-dom";
import {useOutletContext, useParams} from "react-router";

const style = {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 24,
    zIndex: 1202
};
const buttonStyle = (form = false) => ({
    display: 'block',
    marginTop: form ? 22 : 35,
})

const linkStyle = () => ({
    color: 'rgba(0, 0, 0, 0.87)',
    textDecoration: 'NONE'
})

const header_style = {
    paddingBottom: 10
}
const CreateView = ({api, fields, model_name}) => {
    const [error, setError] = useState(false)
    const [params, setParams] = useState({})
    const {data, setNotificationData} = useOutletContext()
    const {id} = useParams()
    useEffect(() => {
        if (id) {
            setParams(data.find(item => item['ci'] === id))
        }
    },);

    const handleSubmit = (e) => {
        e.preventDefault()
        id ?
            api(id).update(params).then((resp) => {
                resp.status !== 200 ?
                    (
                        setError(true)
                    )
                    :
                    (
                        setNotificationData({
                            type: 'success',
                            message: 'Success',
                            open: true
                        })
                    )
            })
            :
            api().create(params).then((resp) => {
                resp.status !== 201 ?
                    (
                        setError(true)
                    )
                    :
                    (
                        setNotificationData({
                            type: 'success',
                            message: 'Success',
                            open: true
                        })
                    )
            })

    }

    return (
        <div className="create-view">
            <Box sx={style}>
                <Container component="main" maxWidth="sm" sx={{mb: 4}}>
                    <Paper variant="string" sx={{my: {xs: 3, md: 6}, p: {xs: 2, md: 3}}}>
                        <form onSubmit={handleSubmit}>
                            <Typography style={header_style} align="center" variant="h5" gutterBottom>
                                {id ? "Modificar" : "Añadir"} {model_name}
                            </Typography>
                            {id ?
                                <CustomForm setParams={setParams} fields={fields}
                                            values={data.find(item => item['ci'] === id)}/>
                                :
                                <CustomForm setParams={setParams} fields={fields}/>
                            }
                            <Stack spacing={2} direction="row" justifyContent="end">
                                <Button variant="contained" type="submit" style={buttonStyle(true)}>Aceptar</Button>
                                <Link to="/medico" style={linkStyle()}>
                                    <Button variant="contained" color="error"
                                            style={buttonStyle(true)}>Cancelar</Button>
                                </Link>
                            </Stack>
                        </form>
                    </Paper>
                </Container>
            </Box>

        </div>
    )
}

export default CreateView



