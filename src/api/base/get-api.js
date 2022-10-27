import {del, get, post, put} from "./index";

const getApi = (endpoint = "", byID = false) => (
    {
        get(param) {
            return get(byID ? `${endpoint}${param}` : param,)
        },
        list(params) {
            return get(endpoint, params)
        },
        create(data) {
            return post(endpoint, data)
        },
        update(data) {
            return put(endpoint, data)
        },
        delete(param) {
            return del(byID ? `${endpoint}${param}` : param,)
        }
    }
)

export default getApi