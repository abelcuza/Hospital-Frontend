import React, {useEffect, useState} from "react"
import CustomForm from "../components/dashboard/custom-form";
import Typography from "@mui/material/Typography";
import {Container, Modal, Stack} from "@mui/material";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import {Link} from "react-router-dom";
import {useLocation, useNavigate, useOutletContext, useParams} from "react-router";

const style = {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
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
    const location = useLocation()
    const navigate = useNavigate()
    const {id} = useParams()
    useEffect(() => {
        if (id) {
            setParams(data.find(item => item['id'] == id))
        }
    }, []);

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
        navigate(`/${location.pathname.split("/")[1]}`)
    }

    return (
        <Modal open>
            <Paper sx={style}>
                <Container component="main" maxWidth="sm" sx={{mb: 4}}>
                    <Box sx={{my: {xs: 3, md: 4}, p: {xs: 2, md: 3}}}>
                        <form onSubmit={handleSubmit}>
                            <Typography style={header_style} align="center" variant="h5" gutterBottom>
                                {id ? "Modificar" : "Añadir"} {model_name}
                            </Typography>
                            {id ?
                                <CustomForm setParams={setParams} fields={fields.filter(filter => filter !== "id")}
                                            values={data.find(item => item['id'] == id)}/>
                                :
                                <CustomForm setParams={setParams} fields={fields.filter(filter => filter !== "id")}/>
                            }
                            <Stack spacing={2} direction="row" justifyContent="end">
                                <Button variant="contained" type="submit" style={buttonStyle(true)}>Aceptar</Button>
                                <Link to={`/${location.pathname.split("/")[1]}`} style={linkStyle()}>
                                    <Button variant="contained" color="error"
                                            style={buttonStyle(true)}>Cancelar</Button>
                                </Link>
                            </Stack>
                        </form>
                    </Box>
                </Container>
            </Paper>
        </Modal>
    )
}

export default CreateView



