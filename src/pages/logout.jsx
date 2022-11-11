import React, {useEffect} from "react"
import Auth from "../api/auth";
import {Navigate} from "react-router";
import {useDispatch} from "react-redux";
import {logout} from "../redux/user/userSlice";


const Logout = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        Auth.logout()
        dispatch(logout())
    }, [])

    return <Navigate replace to="/login"/>
}

export default Logout