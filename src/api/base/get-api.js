import {del, get, post, put} from "./index";

const getApi = (endpoint = "", id = "") => (
    {
        get(param) {
            return get(`${endpoint}${id}/`, param)
        },
        list(params) {
            return get(endpoint, params)
        },
        create(data, headers) {
            return post(endpoint, data, headers)
        },
        update(data) {
            return put(`${endpoint}${id}/`, data)
        },
        delete(param) {
            return del(`${endpoint}${id}/`, param)
        }
    }
)

export default getApi