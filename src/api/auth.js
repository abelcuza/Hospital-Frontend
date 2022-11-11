import getApi from "./base/get-api";

const {REACT_APP_BACKEND_API} = process.env;
const token_endpoint = `${REACT_APP_BACKEND_API}/api/token/`


const login = async (username, password) => {
    await getApi(token_endpoint).create({username, password}).then(res => {
        console.log(res)
        localStorage.setItem('username', username)
        localStorage.setItem('token', res.data['token'])
    })
    return username
}

const logout = () => {
    localStorage.clear()
}

const Auth = {
    login,
    logout,
}

export default Auth