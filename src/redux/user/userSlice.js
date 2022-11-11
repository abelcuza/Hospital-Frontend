import {createSlice} from '@reduxjs/toolkit'


const getInitialState = () => {
    const username = localStorage.getItem("username")
    const initialState = {
        username: "",
        isAuthenticated: false,
    }
    if (username) {
        return {
            username: username,
            isAuthenticated: true
        }
    }
    return initialState
}

export const userSlice = createSlice({
    name: 'user',
    initialState: getInitialState(),
    reducers: {
        login: (state) => {
            state.isAuthenticated = true
        },
        logout: (state) => {
            state.isAuthenticated = false
        },
    },
})

// Action creators are generated for each case reducer function
export const {login, logout} = userSlice.actions

export default userSlice.reducer