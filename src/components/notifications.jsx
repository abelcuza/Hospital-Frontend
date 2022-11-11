import React from "react"
import {Alert, Collapse} from "@mui/material";

const Notification = ({notificationData, setNotificationData}) => {
    const handleClose = () => {
        setNotificationData((data) => (
            {...data, open: false}
        ))
    }
    return (
        <div className="notification">
            <Collapse in={notificationData.open}>
                <Alert onClose={handleClose} severity={notificationData.type}>{notificationData.message}</Alert>
            </Collapse>
        </div>
    )
}

export default Notification