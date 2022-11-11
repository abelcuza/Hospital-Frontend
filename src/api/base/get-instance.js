import axios from "axios"

const getAxiosInstance = () => {
    const axiosInstance = axios.create()

    axiosInstance.interceptors.request.use((request) => {
        const token = localStorage.getItem("token")
        if (token) {
            request.headers.Authorization = `Token ${token}`
        }
        return request
    }, (error) => {
        const {response: {data}} = error;
        return Promise.reject(data);
    },)
    return axiosInstance
}

export default getAxiosInstance