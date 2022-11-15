import React from "react"
import Box from "@mui/material/Box";
import {Stack} from "@mui/material";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";
import {WarningAmber} from "@mui/icons-material";
import {Navigate, useLocation, useOutletContext, useParams} from "react-router";

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

const DeleteMessage = ({api}) => {
    const {id} = useParams()
    const {setNotificationData} = useOutletContext()
    const location = useLocation()

    const handleOnClick = () => {
        api(id).delete().then((resp) => {
            resp.status === 204 ?
                setNotificationData({
                    type: 'success',
                    message: 'El objeto ha sido borrado satisfactoriamente',
                    open: true
                })

                :
                setNotificationData({
                    type: 'error',
                    message: 'Ha habido un error a la hora de borrar el objeto',
                    open: true
                })
            return <Navigate to={location.pathname.split("/")[1]}/>
        })
    }

    return (
        <div className="delete-message">
            <Box sx={style}>
                <Paper variant="elevation" sx={{p: {xs: 2, md: 3}}}>
                    <div>
                        <WarningAmber color="warning" fontSize="large"/>
                        <p>
                            Desea borrar permanentemente el elemento.
                        </p>
                    </div>

                    <Stack spacing={2} direction="row" justifyContent="center">
                        <Link to={`/${location.pathname.split("/")[1]}`} style={linkStyle()}>
                            <Button variant="contained" type="submit" onClick={handleOnClick}
                                    style={buttonStyle(true)}>Aceptar</Button>
                        </Link>
                        <Link to={`/${location.pathname.split("/")[1]}`} style={linkStyle()}>
                            <Button variant="contained" color="error"
                                    style={buttonStyle(true)}>Cancelar</Button>
                        </Link>
                    </Stack>
                </Paper>
            </Box>

        </div>
    )
}
export default DeleteMessage