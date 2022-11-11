import getAxiosInstance from "./get-instance";


const contentType = 'application/json'
const axios = getAxiosInstance()

export const get = async (url, params) => (
    axios.get(url, {params})
)

export const post = async (url, data, headers) => (
    axios.post(url, data, {
        headers: {
            'Content-Type': contentType,
            ...headers
        }
    })
)

export const put = async (url, data) => (
    axios.put(url, data)
)

export const del = async (url) => (
    axios.delete(url)
)